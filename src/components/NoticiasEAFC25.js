import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import BoostingPricing from './BoostingPricing';
import all from '../img/cards/all_sbc.jpg';

import { useNavigate } from 'react-router-dom';

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  function calculateTimeLeft(targetDate) {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance < 0) {
      return 'EXPIRADO';
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <p className="text-lg font-semibold text-center text-red-500">
      {typeof timeLeft === 'string' ? timeLeft : `Expira en ${timeLeft}`}
    </p>
  );
};



const EditModal = ({ document, onSave, onClose }) => {
  const [formData, setFormData] = useState(document);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="modal">
      <h3>Edit Document</h3>
      <input
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      <input
        name="precio_ps"
        type="number"
        value={formData.precio_ps}
        onChange={handleChange}
        placeholder="Precio PS"
      />
      <input
        name="precio_pc"
        type="number"
        value={formData.precio_pc}
        onChange={handleChange}
        placeholder="Precio PC"
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const NoticiasEAFC25 = () => {
  const [selectedOption, setSelectedOption] = useState('SBC');
  const [sbcData, setSbcData] = useState([]);
  const [totwData, setTotwData] = useState([]);
  const [contenidoData, setContenidoData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('expiringSoon');
  const [userEmail, setUserEmail] = useState(null);
  const [editingDoc, setEditingDoc] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) setUserEmail(user.email);
    });

    const fetchData = async () => {
      const db = getFirestore();
      const fetchCollection = async (name) => {
        const snapshot = await getDocs(collection(db, name));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      };
      setSbcData(await fetchCollection('SBC'));
      setTotwData(await fetchCollection('TOTW'));
      setContenidoData(await fetchCollection('contenido'));
    };

    fetchData();
  }, []);

  const handleEdit = async (updatedData) => {
    const db = getFirestore();
    await updateDoc(doc(db, selectedOption, editingDoc.id), updatedData);
    setEditingDoc(null);
    // Re-fetch data to show updated information
    // Can also update only edited item to avoid re-fetching all data
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");
    if (!confirmDelete) return;
  
    const db = getFirestore();
    await deleteDoc(doc(db, selectedOption, id));
  
    // Actualizar el estado local
    if (selectedOption === 'SBC') setSbcData(sbcData.filter(item => item.id !== id));
    else if (selectedOption === 'TOTW') setTotwData(totwData.filter(item => item.id !== id));
    else if (selectedOption === 'contenido') setContenidoData(contenidoData.filter(item => item.id !== id));
  };
  
  

  const sortedSbcData = [...sbcData].sort((a, b) => {
    switch (sortCriteria) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'expiringSoon':
        return new Date(a.expiration) - new Date(b.expiration);
      case 'priceHigh':
        return b.precio_ps - a.precio_ps;
      case 'priceLow':
        return a.precio_ps - b.precio_ps;
      default:
        return 0;
    }
  });

  const sortedTotwData = [...totwData].sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
  });

  const sortedContenidoData = [...contenidoData].sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
  });

  return (
    <section className='flex flex-col items-center justify-start w-full min-h-dvh'>
      <h1 className='p-4 mt-24 text-4xl font-bold text-center'>FC25</h1>

      {/* Selector de opción */}
      <div className='grid grid-cols-2 gap-4 mt-10 sm:flex sm:flex-row sm:space-x-4'>
        {['contenido', 'SBC', 'TOTW', 'BOOSTING'].map((option) => (
          <button
            key={option}
            className={`cursor-pointer rounded-full px-4 py-2 transition-all duration-150 text-white ${selectedOption === option ? 'bg-cardGreen' : 'bg-transparent hover:scale-110'}`}
            onClick={() => setSelectedOption(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de documentos */}
      <div className='flex flex-col items-center w-10/12 text-center sm:w-1/2'>
            {/* Filtros de ordenación */}
            {selectedOption === 'SBC' && (
  <div className="flex flex-col items-center mt-6">
    <label className="mb-4 text-lg font-bold text-white">Ordenar por:</label>
    <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
      <button
        className={`w-full px-2 py-2 rounded-full font-semibold ${
          sortCriteria === 'newest' ? 'bg-cardGreen2 text-white' : 'bg-cardGreen text-white'
        }`}
        onClick={() => setSortCriteria('newest')}
      >
        Más nuevos
      </button>
      <button
        className={`w-full px-2 py-2 rounded-full font-semibold ${
          sortCriteria === 'expiringSoon' ? 'bg-cardGreen2 text-white' : 'bg-cardGreen text-white'
        }`}
        onClick={() => setSortCriteria('expiringSoon')}
      >
        Más próximos a vencer
      </button>
      <button
        className={`w-full px-2 py-2 rounded-full font-semibold ${
          sortCriteria === 'priceHigh' ? 'bg-cardGreen2 text-white' : 'bg-cardGreen text-white'
        }`}
        onClick={() => setSortCriteria('priceHigh')}
      >
        Más caros
      </button>
      <button
        className={`w-full px-2 py-2 rounded-full font-semibold ${
          sortCriteria === 'priceLow' ? 'bg-cardGreen2 text-white' : 'bg-cardGreen text-white'
        }`}
        onClick={() => setSortCriteria('priceLow')}
      >
        Más baratos
      </button>
    </div>
  </div>
)}




        {selectedOption === 'SBC' && (
          <div className='flex flex-col items-center gap-2 mt-6 lg:grid lg:grid-cols-2 lg:gap-6'>
            {sortedSbcData.map((sbc) => (
              <div key={sbc.id} className='flex flex-row items-center h-full p-4 mb-2 text-white bg-cardGreen rounded-3xl ring-4 ring-cardGreen2'>
                <img className='w-36 rounded-3xl' src={sbc.cardimg} alt={sbc.cardimg} />

                <div className='flex flex-col items-center gap-0 font-bold'>
                  <p className='text-xl'>
                    <span className='font-extrabold text-blue-400'>PS</span>  {sbc.precio_ps}K
                  </p>
                  <p className='text-xl'>
                    <span className='font-extrabold text-green-400'>XB</span>  {sbc.precio_ps}K
                  </p>
                  <p className='text-xl'>
                    <span className='font-extrabold text-orange-400'>PC</span>  {sbc.precio_pc}K
                  </p>
                  <p className='text-lg tetxt-cener'>Finaliza el {new Date(sbc.expiration).toLocaleDateString()}</p>
                  <Countdown date={new Date(sbc.expiration)} />
                </div>
                
                {userEmail === 'manuelgurbanov@gmail.com' && (
                  <div className="flex flex-col gap-2 ml-5">
                    <button
                      onClick={() => navigate(`/edit/${selectedOption}/${sbc.id}`)}
                      className="text-blue-500"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(sbc.id)}
                      className="text-red-500"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </div>
            ))} 

          </div>
        )}

        {editingDoc && (
          <EditModal
            document={editingDoc}
            onSave={handleEdit}
            onClose={() => setEditingDoc(null)}
          />
        )}

{selectedOption === 'BOOSTING' && (
          <div className='flex flex-col items-center w-full mt-2'>
            <BoostingPricing />
            <h2 className='text-3xl font-bold'>Contáctanos para conseguir las mejores recompensas!</h2>
          </div>
        )}

        {selectedOption === 'TOTW' && (
          <div className='flex flex-col items-center w-full mt-2'>
            <div className='flex flex-col items-center gap-2'>
              {sortedTotwData.map((totw) => (
                <div key={totw.id} className='flex flex-col items-center p-4 mt-4 text-black bg-white rounded-3xl'>
                  <img className='w-full rounded-3xl' src={totw.imagen} alt={totw.titulo} />
                  <p className='p-4 text-4xl font-bold'>{totw.titulo}</p>
                  {userEmail === 'manuelgurbanov@gmail.com' && (
                  <div className="flex flex-col gap-2 ml-5">
                    <button
                      onClick={() => handleDelete(totw.id)}
                      className="text-red-500"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedOption === 'contenido' && (
          <div className='flex flex-col items-center w-full mt-2'>
            <div className='flex flex-col items-center w-full gap-2'>
              {sortedContenidoData.map((contenido) => (
                <div key={contenido.id} className='flex flex-col items-center p-4 mt-4 text-black bg-white rounded-3xl'>
                  <img className='w-full rounded-3xl' src={contenido.imagen} alt={contenido.titulo} />
                  <p className='text-xl font-bold mt-2'>{contenido.titulo}</p>
                  {userEmail === 'manuelgurbanov@gmail.com' && (
                  <div className="flex flex-col gap-2 ml-5">
                    <button
                      onClick={() => handleDelete(contenido.id)}
                      className="text-red-500"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticiasEAFC25;
