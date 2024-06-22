import React, { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({ currentUser }) => {
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('currentUser:', currentUser);
  }, [currentUser]);

  const sendReview = async () => {
    console.log('Review to be sent:', review);
    console.log('Current user details:', currentUser);

    if (!currentUser || !currentUser.email || review.trim() === '') {
      setError('El campo de reseña no puede estar vacío y el usuario debe estar autenticado.');
      console.log('Error: Empty review or unauthenticated user');
      return;
    }

    if (review.length < 10) {
      setError('La reseña debe tener al menos 10 caracteres.');
      console.log('Error: Review too short');
      return;
    }

    try {
      await addDoc(collection(db, 'reviews'), {
        reviewtext: review,
        username: currentUser.displayName || 'Usuario Anónimo',
        email: currentUser.email,
        timestamp: serverTimestamp(),
      });
      console.log('Review successfully sent');
      setReview('');
      setError('');
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
      setError('Error al enviar la reseña. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center w-full p-4">
      <div className="flex flex-col items-center justify-center w-[60vw]">
        <p className="mb-4 text-2xl font-bold text-center">Enviar Reseña</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Escribe tu reseña..."
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <button onClick={sendReview} className="w-full p-2 text-white bg-blue-500 rounded">
          Enviar Reseña
        </button>
        {error && <p className="mt-2 text-red-500 w-[60vw]">{error}</p>}
      </div>
    </div>
  );
};

export default SendMessage;
