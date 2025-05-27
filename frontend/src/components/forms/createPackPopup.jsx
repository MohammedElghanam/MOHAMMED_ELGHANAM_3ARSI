import React, { useState } from "react";
import { X } from "lucide-react";

const servicesByType = {
  neggafa: [
    { id: "n1", nom: "Neggafa Traditionnelle Fatima", tarif: 800 },
    { id: "n2", nom: "Neggafa Moderne Aicha", tarif: 1000 },
    { id: "n3", nom: "Neggafa Royale Khadija", tarif: 1200 },
  ],
  "groupe musique": [
    { id: "m1", nom: "Orchestre Andalou", tarif: 1500 },
    { id: "m2", nom: "Groupe Chaabi", tarif: 1200 },
    { id: "m3", nom: "DJ Moderne", tarif: 800 },
  ],
  traiteur: [
    { id: "t1", nom: "Traiteur Premium", tarif: 2500 },
    { id: "t2", nom: "Traiteur Traditionnel", tarif: 2000 },
    { id: "t3", nom: "Traiteur Luxe", tarif: 3500 },
  ],
  "make up": [
    { id: "mk1", nom: "Make Up Pro Studio", tarif: 300 },
    { id: "mk2", nom: "Beauty Artist Casablanca", tarif: 400 },
    { id: "mk3", nom: "Glamour Make Up", tarif: 500 },
  ],
  "hair style": [
    { id: "h1", nom: "Coiffure Elegance", tarif: 200 },
    { id: "h2", nom: "Hair Studio Moderne", tarif: 250 },
    { id: "h3", nom: "Salon Royal", tarif: 300 },
  ],
  "salle de fête": [
    { id: "s1", nom: "Villa des Roses", tarif: 3000 },
    { id: "s2", nom: "Palais des Fêtes", tarif: 4000 },
    { id: "s3", nom: "Salle Crystal", tarif: 2500 },
  ],
  photographer: [
    { id: "p1", nom: "Photo Dreams", tarif: 1200 },
    { id: "p2", nom: "Wedding Photographer Pro", tarif: 1500 },
    { id: "p3", nom: "Studio Vision", tarif: 1000 },
  ],
  hotel: [
    { id: "ht1", nom: "Hotel Luxury Casablanca", tarif: 5000 },
    { id: "ht2", nom: "Resort Marrakech", tarif: 7000 },
    { id: "ht3", nom: "Hotel Boutique Rabat", tarif: 4000 },
  ],
  "lune de miel": [
    { id: "l1", nom: "Voyage Romantique Agadir", tarif: 3000 },
    { id: "l2", nom: "Séjour Marrakech", tarif: 2500 },
    { id: "l3", nom: "Escapade Chefchaouen", tarif: 2000 },
  ],
};

const serviceTypes = Object.keys(servicesByType);

const CreatePackPopup = ({ onClose }) => {
  const [packName, setPackName] = useState("");
  const [selectedServices, setSelectedServices] = useState({});

  const handleServiceSelect = (type, id) => {
    const service = servicesByType[type].find((s) => s.id === id);
    if (service) {
      setSelectedServices({ ...selectedServices, [type]: service });
    }
  };

  const removeService = (type) => {
    const newServices = { ...selectedServices };
    delete newServices[type];
    setSelectedServices(newServices);
  };

  const totalPrice = Object.values(selectedServices).reduce((acc, s) => acc + s.tarif, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (packName && Object.keys(selectedServices).length > 0) {
    //   onSubmit({
    //     nom: packName,
    //     services: Object.values(selectedServices).map((s) => s.nom),
    //     prixTotal: totalPrice,
    //   });
      onClose();
    }
  };

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
                    className="w-full border border-gray-300 rounded p-2"
                    value={selectedServices[type]?.id || ""}
                    onChange={(e) => handleServiceSelect(type, e.target.value)}
                  >
                    <option value="">Choisir {type}</option>
                    {servicesByType[type].map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.nom} - {service.tarif}€
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {Object.keys(selectedServices).length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-2">Services Sélectionnés</label>
              <div className="space-y-2">
                {Object.entries(selectedServices).map(([type, service]) => (
                  <div key={type} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                    <span>{service.nom}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700 font-semibold">{service.tarif}€</span>
                      <button
                        type="button"
                        onClick={() => removeService(type)}
                        className="text-red-500 hover:underline"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-right mt-2 font-bold text-pink-600">
                Prix Total: {totalPrice.toLocaleString()}€
              </p>
            </div>
          )}

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              disabled={!packName || Object.keys(selectedServices).length === 0}
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
