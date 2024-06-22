import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MessageSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = () => {
      const q = query(collection(db, 'reviews'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedReviews = [];
        querySnapshot.forEach((doc) => {
          fetchedReviews.push({ id: doc.id, ...doc.data() });
        });
        setReviews(fetchedReviews);
      });

      return () => unsubscribe();
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-screen mt-12 mb-12">
      <h2 className="mb-4 text-4xl font-bold text-center">Reseñas de Clientes</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="text-center">
            <p className="text-2xl">{review.reviewtext}</p>
            <p className="mt-2 text-xl text-gray-500">Enviado por: {review.username}</p>
            <p className="mt-2 text-xl text-gray-500">{review.timestamp?.toDate().toLocaleString()}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MessageSlider;
