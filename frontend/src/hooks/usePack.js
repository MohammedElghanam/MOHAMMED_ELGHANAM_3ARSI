import { useEffect, useState } from "react";
import axios from "../api/axios"; 

const usePack = (onClose) => {

    const fieldMap = {
        neggafa: "Neğafa",
        music_band: "Groupe Musical",
        caterer: "Traiteur",
        makeup: "Maquillage",
        hair_style: "Coiffure",
        party_room: "Salle de fête",
        photographer: "Photographe",
        hotel: "Hôtel",
        honeymoon: "Voyage de noces"
    };


    const [name, setName] = useState("");
    const [selectedServices, setSelectedServices] = useState({});
    const [price, setPrice] = useState(0);
    const [isLoading, setLoading] = useState(false);
    
    

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
            "type": "caterer",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 4,
            "user_id": 11,
            "name": " t2 Derraj",
            "type": "caterer",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 5,
            "user_id": 11,
            "name": "groupe musique 1",
            "type": "music_band",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 6,
            "user_id": 11,
            "name": "groupe musique 2",
            "type": "music_band",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 7,
            "user_id": 11,
            "name": "make up 1",
            "type": "makeup",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 8,
            "user_id": 11,
            "name": "make up 2",
            "type": "makeup",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 9,
            "user_id": 11,
            "name": "hair style 1",
            "type": "hair_style",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 10,
            "user_id": 11,
            "name": "hair style 2",
            "type": "hair_style",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        },
        {
            "id": 11,
            "user_id": 11,
            "name": "salle de fête 1",
            "type": "party_room",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 12,
            "user_id": 11,
            "name": "salle de fête 2",
            "type": "party_room",
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
            "type": "honeymoon",
            "phone": "0616435562",
            "price": "499",
            "created_at": "2025-06-01T00:28:45.000000Z",
            "updated_at": "2025-06-01T00:28:45.000000Z"
        },
        {
            "id": 18,
            "user_id": 11,
            "name": "lune de miel 2",
            "type": "honeymoon",
            "phone": "0622341943",
            "price": "1999",
            "created_at": "2025-06-01T16:10:41.000000Z",
            "updated_at": "2025-06-01T16:10:41.000000Z"
        }
    ]);

    const serviceTypes = [...new Set(services.map((s) => s.type))];

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
            

            setPrice(total);
            return updated;
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name.trim()) {
            alert("Le nom du pack est obligatoire");
            return;
        }
        
        setLoading(true);
        
        const formData = {
            ...selectedServices,
            name,
            price
        }

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post('/packages', formData, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            console.log("Réponse du serveur:", response.data);
            alert("Pack bien ajouté !");
            setLoading(false);
            onClose();
        } catch (error) {
            console.error("Erreur lors de l'envoi:", error);
            alert("Erreur lors de l'ajout du pack");
        }
    };

    return {
        name,
        setName,
        serviceTypes,
        selectedServices,
        handleSubmit,
        services,
        handleChange,
        price,
        isLoading,
    }
}

export default usePack;