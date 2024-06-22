import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorText('Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 10) {
      setErrorText('La contraseña debe tener al menos 10 caracteres.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: displayName });

      console.log('Usuario registrado exitosamente:', user);
      alert('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar usuario', error);

      if (error.code === 'auth/email-already-in-use') {
        setErrorText('El correo electrónico ya está registrado.');
      } else {
        setErrorText('Error al registrar usuario.');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <form onSubmit={handleRegister} className="p-4 mt-12 rounded shadow-md bg-zinc-100">
        <h2 className="mb-4 text-2xl font-bold">Registrarse</h2>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Nombre"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar Contraseña"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">Registrarse</button>
        {errorText && <p className="mt-2 text-red-500">{errorText}</p>}
      </form>
    </div>
  );
};

export default Register;
