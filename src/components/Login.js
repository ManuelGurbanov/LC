import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Usuario logueado exitosamente:', user);
      setLoggedIn(true);
      setLoginMessage('Logueado correctamente');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      setLoggedIn(false);
      setLoginMessage('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-12">
      <form onSubmit={handleLogin} className="p-4 rounded shadow-md bg-zinc-100">
        <h2 className="mb-4 text-2xl font-bold">Iniciar Sesión</h2>
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
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <button type="submit" className="w-full p-2 mb-4 text-white bg-blue-500 rounded">Iniciar Sesión</button>
        <h2 className={loggedIn ? 'text-green-500' : 'text-red-500'}>{loginMessage}</h2>

          <Link to="/register" className="text-blue-500 hover:underline">
            Registrarse
          </Link>
      </form>
    </div>
  );
};

export default Login;
