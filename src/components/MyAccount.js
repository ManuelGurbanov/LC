import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import UpdatePassword from './UpdatePassword';

import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const navigate = useNavigate();
  
  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  
  return (
    <section className="flex flex-col items-center justify-start w-screen h-[90vh] p-0 mt-12 text-white">
      <h1 className="mb-8 text-4xl font-bold text-black">
        Mi Cuenta
      </h1>
      <h1 className="mb-8 text-2xl font-semibold text-black">
        {user ? user.displayName : 'Necesitas Iniciar Sesión'}
      </h1>
      <button
        onClick={handleLogout}
        className="px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white bg-red-600 rounded-md hover:bg-red-500"
      >
        Cerrar Sesión
      </button>
      <UpdatePassword/>
    </section>
  );
};

export default MyAccount;
