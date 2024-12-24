import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const BoostingEditPanel = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const pricesCollection = collection(db, 'boostingPrices');
      const pricesSnapshot = await getDocs(pricesCollection);
      const pricesData = {};

      pricesSnapshot.forEach((doc) => {
        pricesData[doc.id] = doc.data();
      });

      setPrices(pricesData);
      setLoading(false);
    };

    fetchPrices();
  }, []);

  const handleEditClick = (region, boostingType) => {
    setEditing(true);
    setCurrentEdit({
      region,
      boostingType,
      data: { ...prices[region][boostingType] },
    });
  };

  const handlePriceChange = (tier, value) => {
    setCurrentEdit((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [tier]: value,
      },
    }));
  };

  const saveChanges = async () => {
    const { region, boostingType, data } = currentEdit;
    const updatedPrices = { ...prices, [region]: { ...prices[region], [boostingType]: data } };

    await setDoc(doc(db, 'boostingPrices', region), updatedPrices[region]);
    setPrices(updatedPrices);
    setEditing(false);
  };

  if (loading) {
    return <p className="text-center text-white">Cargando...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="mt-12 text-3xl font-bold text-white">Panel de Edición de Precios</h1>
      {editing ? (
        <div className="mt-4">
          <h2 className="text-xl text-yellow-300">
            Editando: {currentEdit.region.toUpperCase()} - {currentEdit.boostingType}
          </h2>
          <div className="mt-4">
            {Object.keys(currentEdit.data).map((tier) => (
              <div key={tier} className="mb-4">
                <label className="block text-white">{tier}</label>
                <input
                  type="number"
                  value={currentEdit.data[tier]}
                  onChange={(e) => handlePriceChange(tier, e.target.value)}
                  className="w-full px-4 py-2 mt-2 text-black rounded"
                />
              </div>
            ))}
          </div>
          <button
            onClick={saveChanges}
            className="px-4 py-2 mt-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          >
            Guardar Cambios
          </button>
          <button
            onClick={() => setEditing(false)}
            className="px-4 py-2 mt-4 ml-4 font-bold text-white bg-red-500 rounded hover:bg-red-700"
          >
            Cancelar
          </button>
        </div>
      ) : (
        <div className="grid gap-4 mt-4">
          {Object.keys(prices).map((region) => (
            <div key={region} className="p-4 bg-gray-800 rounded">
              <h2 className="text-lg font-bold text-white">{region.toUpperCase()}</h2>
              {Object.keys(prices[region]).map((boostingType) => (
                <div key={boostingType} className="mt-2">
                  <h3 className="text-yellow-300">{boostingType}</h3>
                  <button
                    onClick={() => handleEditClick(region, boostingType)}
                    className="px-2 py-1 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                  >
                    Editar
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoostingEditPanel;
