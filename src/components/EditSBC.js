import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

const EditSBC = () => {
  const { id, collectionName } = useParams();
  const [documentData, setDocumentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDocumentData(docSnap.data());
      } else {
        console.log("Document not found");
      }
      setLoading(false);
    };
    fetchData();
  }, [id, collectionName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocumentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
    const db = getFirestore();
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, documentData);
    navigate('/');
  };

  if (loading) return <p className="text-center mt-10 text-lg font-semibold">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-48">Edit Document</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Imagen URL:</label>
        <img className='w-28' src={documentData.cardimg}></img>
        <input
          name="cardimg"
          type="text"
          value={documentData.cardimg || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Fecha de Publicación:</label>
        <input
          name="date"
          type="datetime-local"
          value={documentData.date || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Fecha de Expiración:</label>
        <input
          name="expiration"
          type="datetime-local"
          value={documentData.expiration || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Precio PS:</label>
        <input
          name="precio_ps"
          type="number"
          value={documentData.precio_ps || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Precio PC:</label>
        <input
          name="precio_pc"
          type="number"
          value={documentData.precio_pc || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handleSave}
          className="px-6 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-200"
        >
          Guardar
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 font-semibold text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all duration-200"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditSBC;
