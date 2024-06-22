import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MessageSlider = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const fetchedMessages = [];
          querySnapshot.forEach((doc) => {
            fetchedMessages.push({ id: doc.id, ...doc.data() });
          });
          setMessages(fetchedMessages);
        });
        
        // Cleanup function to unsubscribe from the snapshot listener
        return () => unsubscribe();
      } catch (error) {
        console.error('Error al obtener mensajes:', error);
      }
    };

    fetchMessages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold">Mensajes de Clientes</h2>
      <Slider {...settings}>
        {messages.map((message) => (
          <div key={message.id} className="text-center">
            <p className="text-lg">{message.text}</p>
            <p className="mt-2 text-gray-500">Enviado: {message.timestamp?.toDate().toLocaleString()}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MessageSlider;
