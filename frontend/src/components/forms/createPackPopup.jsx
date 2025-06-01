import React, { useState } from "react";
import { X } from "lucide-react";
import usePack from "../../hooks/usePack";

const CreatePackPopup = ({ onClose }) => {
  
    const {
        packName,
        setPackName,
        serviceTypes,
        selectedServices,
        handleSubmit,
        services,
        handleChange,
        totalPrice
    } = usePack(onClose);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Créer un Pack Personnalisé</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nom du Pack</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Mon pack personnalisé"
              value={packName}
              onChange={(e) => setPackName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Sélectionner les Services</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceTypes.map((type) => (
                <div key={type}>
                  <label className="block text-sm font-semibold mb-1 capitalize">{type}</label>
                  <select 
                    value={selectedServices[type] || ""}
                    onChange={(e) => handleChange(type, e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                  >
                    <option value="" disabled>Choisir {type}</option>
                    {services
                      .filter((s) => s.type === type)
                      .map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} - {s.price}€
                        </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-right font-semibold">
            Total: {totalPrice.toLocaleString()} €
          </div>


          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Créer le Pack
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 px-4 py-2 rounded"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePackPopup;
