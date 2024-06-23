import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SendMessage = ({ currentUser }) => {
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('currentUser:', currentUser);
  }, [currentUser]);

  const sendReview = async () => {

    if (!currentUser || !currentUser.email || review.trim() === '') {
      setError('El campo de reseña no puede estar vacío y el usuario debe estar autenticado.');
      return;
    }

    if (review.length < 10) {
      setError('La reseña debe tener al menos 10 caracteres.');
      return;
    }

    if (review.length > 140) {
      setError('La reseña no puede tener más de 140 caracteres.');
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
        <p className="mb-4 text-2xl font-bold text-center">Enviar Comentario</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Escribe tu reseña..."
          className="w-3/4 p-2 mb-2 border rounded"
          maxLength="140"
          required
        />
        <button onClick={sendReview} className="w-3/4 p-2 text-white bg-blue-500 rounded">
          Enviar
        </button>
        {error && <p className="mt-2 text-red-500 w-[60vw]">{error}</p>}
      </div>
    </div>
  );
};

export default SendMessage;
