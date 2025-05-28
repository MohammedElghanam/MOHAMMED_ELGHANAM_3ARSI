import { useState } from "react";

const usePack = (onClose) => {

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
            alert(`Pack "${packName}" créé avec succès !\nServices sélectionnés : ${JSON.stringify(selectedServices, null, 2)}\nPrix total : ${totalPrice}€`);
            onClose();
        }
    };


  return {
    packName,
    setPackName,
    serviceTypes,
    servicesByType,
    selectedServices,
    handleServiceSelect,
    removeService,
    totalPrice,
    handleSubmit,
  }
}

export default usePack;