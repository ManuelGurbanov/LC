import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({ currentUser }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (!currentUser || message.trim() === '') return;

    try {
      await addDoc(collection(db, 'messages'), {
        content: message,
        senderId: currentUser.uid,
        timestamp: serverTimestamp(),
      });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button onClick={sendMessage} className="w-full p-2 text-white bg-blue-500 rounded">
        Enviar Mensaje
      </button>
    </div>
  );
};

export default SendMessage;