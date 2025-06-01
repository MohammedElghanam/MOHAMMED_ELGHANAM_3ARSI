import { useEffect, useState } from "react";
import axios from "../api/axios"; 

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

    // const serviceTypes = Object.keys(servicesByType);
    const [packName, setPackName] = useState("");
    const [services, setServices] = useState([
        {
            "id": 1,
            "user_id": 11,
            "name": " n1 Sultana ",
            "type": "neggafa",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 2,
            "user_id": 11,
            "name": " n2 Derraj",
            "type": "neggafa",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 3,
            "user_id": 11,
            "name": " t1 Sultana",
            "type": "traiteur",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 4,
            "user_id": 11,
            "name": " t2 Derraj",
            "type": "traiteur",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 5,
            "user_id": 11,
            "name": "groupe musique 1",
            "type": "groupe musique",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 6,
            "user_id": 11,
            "name": "groupe musique 2",
            "type": "groupe musique",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 7,
            "user_id": 11,
            "name": "make up 1",
            "type": "make up",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 8,
            "user_id": 11,
            "name": "make up 2",
            "type": "make up",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 9,
            "user_id": 11,
            "name": "hair style 1",
            "type": "hair style",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 10,
            "user_id": 11,
            "name": "hair style",
            "type": "hair style 2",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 11,
            "user_id": 11,
            "name": "salle de fête 1",
            "type": "salle de fête",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 12,
            "user_id": 11,
            "name": "salle de fête 2",
            "type": "salle de fête",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 13,
            "user_id": 11,
            "name": "photographer 1",
            "type": "photographer",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 14,
            "user_id": 11,
            "name": "photographer 2",
            "type": "photographer",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 15,
            "user_id": 11,
            "name": "hotel 1",
            "type": "hotel",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 16,
            "user_id": 11,
            "name": "hotel 2",
            "type": "hotel",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 17,
            "user_id": 11,
            "name": "lune de miel 1",
            "type": "lune de miel",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 18,
            "user_id": 11,
            "name": "lune de miel 2",
            "type": "lune de miel",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        }
    ]);

    const serviceTypes = [...new Set(services.map((s) => s.type))];
    const [selectedServices, setSelectedServices] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);

    const handleChange = (type, value) => {
        const serviceName = value;
        setSelectedServices((prev) => {
            const updated = {
            ...prev,
            [type]: serviceName,
            };

            const total = Object.values(updated)
            .map((name) => Number(services.find((s) => s.name === name)?.price) || 0)
            .reduce((sum, price) => sum + price, 0);

            console.log("total:", total);
            

            setTotalPrice(total);
            return updated;
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            ...selectedServices,
            packName,
            totalPrice
        }

        console.log("values selcted:", formData);
    };

    // const handleServiceSelect = (type, id) => {
    //     const service = servicesByType[type].find((s) => s.id === id);
    //     if (service) {
    //     setSelectedServices({ ...selectedServices, [type]: service });
    //     }
    // };

    // const removeService = (type) => {
    //     const newServices = { ...selectedServices };
    //     delete newServices[type];
    //     setSelectedServices(newServices);
    // };

    // const totalPrice = Object.values(selectedServices).reduce((acc, s) => acc + s.tarif, 0);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (packName && Object.keys(selectedServices).length > 0) {
    //         alert(`Pack "${packName}" créé avec succès !\nServices sélectionnés : ${JSON.stringify(selectedServices, null, 2)}\nPrix total : ${totalPrice}€`);
    //         onClose();
    //     }
    // };

    // const allServices = async () => {
    //     try {
    //         const response = await axios("/allservices", {
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         console.log("services: ", response.data);
            
    //         setServices(response.data);
    //     } catch (error) {
    //         console.error("Erreur lors du chargement des services:", error);
    //     }
    // }

    // useEffect(() => {
    //     allServices();
    // }, [services]);


    return {
        packName,
        setPackName,
        serviceTypes,
        servicesByType,
        selectedServices,
        handleSubmit,
        services,
        handleChange,
        totalPrice
    }
}

export default usePack;