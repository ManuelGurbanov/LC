import React, { useState } from 'react';
import { getAuth, updatePassword } from 'firebase/auth';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const auth = getAuth();

  const handleChangePassword = () => {
    const user = auth.currentUser;

    if (newPassword !== newPasswordConfirm) {
      setError('Las contraseñas no coinciden.');
      setSuccess('');
      return;
    }

    if (user) {
      updatePassword(user, newPassword)
        .then(() => {
          setSuccess('Contraseña actualizada exitosamente.');
          setError('');
        })
        .catch((error) => {
          setError('Error al actualizar la contraseña: ' + error.message);
          setSuccess('');
        });
    } else {
      setError('Usuario no autenticado.');
      setSuccess('');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full gap-3 text-center'>
      <h2 className='mt-12 text-3xl font-semibold text-black'>Cambiar Contraseña</h2>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Nueva contraseña"
        className="w-3/4 p-2 text-black border rounded sm:w-1/4"
      />
      <input
        type="password"
        value={newPasswordConfirm}
        onChange={(e) => setNewPasswordConfirm(e.target.value)}
        placeholder="Confirmar nueva contraseña"
        className="w-3/4 p-2 text-black border rounded sm:w-1/4"
      />
      <button onClick={handleChangePassword} className="p-2 text-white bg-blue-600 rounded hover:bg-blue-500">
        Cambiar Contraseña
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}
    </div>
  );
};

export default ChangePassword;
