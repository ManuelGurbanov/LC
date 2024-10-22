import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Asegúrate de que esta ruta sea correcta
import { collection, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';
import { auth } from '../firebase'; // Importa el hook de autenticación

const AdminPricing = () => {
  const [prices, setPrices] = useState({}); // Almacena los precios
  const [loading, setLoading] = useState(true);
  const regions = ['arg', 'chi', 'col', 'eeuu', 'eurusd']; // Regiones disponibles
  // Define los tiers en orden deseado
  const tiers = [
    '50K',
    '100K',
    '200K',
    '300K',
    '400K',
    '500K',
    '600K',
    '700K',
    '800K',
    '900K',
    '1M',
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const pricesCollection = collection(db, 'prices');
        const pricesSnapshot = await getDocs(pricesCollection);
        const pricesData = {};

        pricesSnapshot.forEach((doc) => {
          pricesData[doc.id] = doc.data();
        });

        setPrices(pricesData);
      } catch (error) {
        console.error('Error al obtener precios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  // Función para manejar la actualización de precios
  const handleSubmit = async (region, event) => {
    event.preventDefault();

    const regionDocRef = doc(db, 'prices', region); // Definimos la referencia al documento de la región

    try {
      // Intenta actualizar el documento
      await updateDoc(regionDocRef, prices[region]);

      alert(`Precios de ${region.toUpperCase()} actualizados correctamente!`);
    } catch (error) {
      console.error('Error al actualizar precios:', error);

      // Si no existe el documento, crearlo con los valores actuales
      if (error.code === 'not-found') {
        try {
          await setDoc(regionDocRef, prices[region]);
          alert(`Documento creado y precios de ${region.toUpperCase()} guardados correctamente!`);
        } catch (creationError) {
          console.error('Error al crear el documento:', creationError);
          alert('Error al crear el documento. Intenta nuevamente.');
        }
      } else {
        alert('Error al actualizar precios. Intenta nuevamente.');
      }
    }
  };

  const handlePriceChange = (region, tier, value) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [region]: {
        ...prevPrices[region],
        [tier]: value,
      },
    }));
  };

  if (loading) {
    return <div>Cargando precios...</div>;
  }


  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4">Administración de Precios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <div key={region} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{region.toUpperCase()}</h2>
            <form onSubmit={(event) => handleSubmit(region, event)}>
              {tiers.map((tier) => (
                <div key={tier} className="flex justify-between items-center mb-2">
                  <label className="text-lg">{tier}</label>
                  <input
                    type="number"
                    value={prices[region]?.[tier] || 0} // Utiliza el operador de encadenamiento opcional
                    onChange={(e) => handlePriceChange(region, tier, Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700 transition duration-300"
              >
                Guardar Precios
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPricing;
