import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Usuario deslogueado exitosamente');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;