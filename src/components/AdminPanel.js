import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Asegúrate de que esta ruta sea correcta
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore'; // Importa las funciones necesarias
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Importa las funciones necesarias

const AdminPanel = ({ user }) => {
  const [cardImg, setCardImg] = useState(null);
  const [precioPS, setPrecioPS] = useState('');
  const [precioPC, setPrecioPC] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [expirationTime, setExpirationTime] = useState(null);
  const [regionPrices, setRegionPrices] = useState({}); // Para los precios por región
  const [totwImg, setTotwImg] = useState(null);
  const [totwTitle, setTotwTitle] = useState('');
  const [contenidoImg, setContenidoImg] = useState(null);
  const [contenidoTitle, setContenidoTitle] = useState(''); // Corrige aquí: contenidoTitle en lugar de titulo
  const storage = getStorage(); // Obtén la referencia del storage

  // Cargar precios existentes al iniciar el componente
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const pricesCollection = collection(db, 'Prices');
        const pricesSnapshot = await getDocs(pricesCollection);
        const prices = {};
        pricesSnapshot.forEach((doc) => {
          prices[doc.id] = doc.data();
        });
        setRegionPrices(prices);
      } catch (error) {
        console.error('Error al cargar precios: ', error);
      }
    };

    fetchPrices(); // Llama a la función para obtener precios al montar el componente
  }, []);

  // Lógica de conteo regresivo
  useEffect(() => {
    if (expirationDate) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const countdownTime = new Date(expirationDate).getTime();
        const distance = countdownTime - now;

        if (distance < 0) {
          clearInterval(interval);
          setExpirationTime('EXPIRED');
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setExpirationTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [expirationDate]);

  const handleImageChange = (e) => {
    setCardImg(e.target.files[0]); // Guarda el archivo de imagen
  };

  const handleTotwImageChange = (e) => {
    setTotwImg(e.target.files[0]);
  };

  const handleContenidoImageChange = (e) => {
    setContenidoImg(e.target.files[0]);
  };

  // Función para manejar el envío de datos SBC
  const handleSubmitSBC = async (e) => {
    e.preventDefault();
    if (!cardImg || !precioPS || !precioPC || !expirationDate) {
      alert('Por favor completa todos los campos.');
      return;
    }
  
    // Obtener la fecha actual
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  
    const storageRef = ref(storage, `images/${cardImg.name}`); // Crea una referencia para la imagen
  
    try {
      // Subir la imagen a Firebase Storage
      await uploadBytes(storageRef, cardImg);
      const downloadURL = await getDownloadURL(storageRef); // Obtén la URL de descarga
  
      // Subir los datos a Firebase Firestore
      const sbcData = {
        cardimg: downloadURL,
        precio_ps: Number(precioPS),
        precio_pc: Number(precioPC),
        expiration: expirationDate,
        date: formattedDate, // Agregar la fecha actual al objeto
      };
  
      // Cambia a Firestore
      const sbcCollection = collection(db, 'SBC'); // 'SBC' es el nombre de la colección
      await addDoc(sbcCollection, sbcData); // Agrega el documento
      alert('SBC agregado exitosamente.');
  
      // Reiniciar el formulario
      setCardImg(null);
      setPrecioPS('');
      setPrecioPC('');
      setExpirationDate('');
    } catch (error) {
      console.error('Error al agregar SBC: ', error);
      alert('Hubo un error al agregar el SBC.');
    }
  };
  

  // Función para manejar el envío de TOTW
  const handleSubmitTOTW = async (e) => {
    e.preventDefault();
    if (!totwImg || !totwTitle) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const storageRef = ref(storage, `images/totw/${totwImg.name}`);

    try {
      await uploadBytes(storageRef, totwImg);
      const downloadURL = await getDownloadURL(storageRef);

      const currentDate = new Date();
      const totwData = {
        titulo: totwTitle,
        imagen: downloadURL,
        fecha: currentDate.toISOString(),
      };


      const totwCollection = collection(db, 'TOTW');
      await addDoc(totwCollection, totwData);
      alert('TOTW agregado exitosamente.');
      setTotwImg(null);
      setTotwTitle('');
    } catch (error) {
      console.error('Error al agregar TOTW: ', error);
      alert('Hubo un error al agregar el TOTW.');
    }
  };


  const handleSubmitContenido = async (e) => {
    e.preventDefault();
    if (!contenidoImg || !contenidoTitle) {
      alert('Por favor completa todos los campos.');
      return;
    }
  
    const storageRef = ref(storage, `images/contenido/${contenidoImg.name}`);
  
    try {
      // Subir la imagen a Firebase Storage
      await uploadBytes(storageRef, contenidoImg);
      const downloadURL = await getDownloadURL(storageRef); 
  
      const currentDate = new Date();

      const contenidoData = {
        titulo: contenidoTitle,
        imagen: downloadURL,
        fecha: currentDate.toISOString(),
      };
  
      const contenidoCollection = collection(db, 'contenido');
      await addDoc(contenidoCollection, contenidoData);
      alert('Contenido agregado exitosamente.');
  
      // Reiniciar el formulario
      setContenidoImg(null);
      setContenidoTitle(''); // Reinicia el campo título
    } catch (error) {
      console.error('Error al agregar Contenido: ', error);
      alert('Hubo un error al agregar el Contenido.');
    }
  };
  
  // Función para manejar el cambio de precios por región
  const handleRegionPriceChange = (e) => {
    const { name, value } = e.target;
    setRegionPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitPrices = async (e) => {
    e.preventDefault();
    // Aquí puedes subir los precios a la base de datos
    try {
      const pricesCollection = collection(db, 'Prices');
      const existingPrices = await getDocs(pricesCollection);

      const promises = existingPrices.docs.map(async (doc) => {
        const region = doc.id;
        const newPrice = regionPrices[region] || 0;

        if (newPrice !== doc.data()[region]) {
          await updateDoc(doc.ref, { [region]: Number(newPrice) }); // Actualiza el precio en Firestore
        }
      });

      await Promise.all(promises);
      alert('Precios actualizados exitosamente.');
    } catch (error) {
      console.error('Error al actualizar precios: ', error);
      alert('Hubo un error al actualizar los precios.');
    }
  };

  return (
    <section className="flex flex-col items-center justify-start w-full min-h-dvh">
      <h1 className="p-4 mt-24 text-4xl font-bold text-center">Panel de Administrador</h1>

      {/* Formulario para agregar SBC */}
      <form onSubmit={handleSubmitSBC} className="flex flex-col items-center w-10/12 sm:w-1/2 mt-10 text-black">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 mb-4 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Precio PS"
          value={precioPS}
          onChange={(e) => setPrecioPS(e.target.value)}
          className="p-2 mb-4 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Precio PC"
          value={precioPC}
          onChange={(e) => setPrecioPC(e.target.value)}
          className="p-2 mb-4 border rounded"
          required
        />
        <input
          type="datetime-local"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="bg-cardGreen text-white rounded px-4 py-2 transition-all duration-150 hover:scale-110">
          Agregar SBC
        </button>
      </form>

      {/* Formulario para agregar TOTW */}
      <form onSubmit={handleSubmitTOTW} className="flex flex-col items-center w-10/12 sm:w-1/2 mt-10 text-black">
        <input
          type="file"
          accept="image/*"
          onChange={handleTotwImageChange}
          className="p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Título TOTW"
          value={totwTitle}
          onChange={(e) => setTotwTitle(e.target.value)}
          className="p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="bg-cardGreen text-white rounded px-4 py-2 transition-all duration-150 hover:scale-110">
          Agregar TOTW
        </button>
      </form>

      {/* Formulario para agregar Contenido */}
      <form onSubmit={handleSubmitContenido} className="flex flex-col items-center w-10/12 sm:w-1/2 mt-10 text-black">
        <input
          type="file"
          accept="image/*"
          onChange={handleContenidoImageChange}
          className="p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Título Contenido"
          value={contenidoTitle}
          onChange={(e) => setContenidoTitle(e.target.value)} // Cambia a setContenidoTitle
          className="p-2 mb-4 border rounded"
          required
        />
        <button type="submit" className="bg-cardGreen text-white rounded px-4 py-2 transition-all duration-150 hover:scale-110">
          Agregar Contenido
        </button>
      </form>
    </section>
  );
};

export default AdminPanel;
