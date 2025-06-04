import { useEffect, useState } from "react"
import axios from "../api/axios"; 

function useMariage(onClose) {

    const [formData, setFormData] = useState({
        bride_name: "",
        groom_name: "",
        wedding_date: "",
        location: "",
        city: "",
        phone: "",
        guests_number: 0,
        package: ""
    })

    const [errors, setErrors] = useState({});
    const [mariages, setMariages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [packages, setPackages] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const packs = [
        { id: "basic", name: "Pack Basique", price: 5000 },
        { id: "premium", name: "Pack Premium", price: 8000 },
        { id: "luxury", name: "Pack Luxe", price: 12000 },
    ]

    const validate = () => {
      const newErrors = {};
      if (!formData.bride_name.trim()) newErrors.bride_name = "Champ requis";
      if (!formData.groom_name.trim()) newErrors.groom_name = "Champ requis";
      if (!formData.wedding_date.trim()) newErrors.wedding_date = "Champ requis";
      if (!formData.location.trim()) newErrors.location = "Champ requis";
      if (!formData.city.trim()) newErrors.city = "Champ requis";
      if (!formData.phone.trim()) newErrors.phone = "Champ requis";
      
      if (formData.guests_number === "" || formData.guests_number === null || isNaN(formData.guests_number)) {
        newErrors.guests_number = "Champ requis";
      } else if (formData.guests_number <= 0) {
        newErrors.guests_number = "Le nombre d'invités doit être supérieur à 0";
      }

      if (!formData.package.trim()) newErrors.package = "Champ requis";

      return newErrors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrors({});
      setIsLoading(true);

      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsLoading(false);
        return;
      }

      try {

        console.log(formData);
        // return;
        
        const token = localStorage.getItem("token");
        const response = await axios.post("/mariages", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRefresh(prev => !prev);
        // const newMariage = response.data;
        // setMariages((prevMariages) => [newMariage, ...prevMariages]);
        // setMariages([...mariages, response.data]);
        setErrors({});
        alert('the wedding created succesflly!')
        onClose();
      } catch (error) {
        if (error.response) {
          if (error.response.data.errors) {
            console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
          }
        }
      }

      onClose()
    }

  const fetchMariages = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/mariages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMariages(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des mariages:", error);
    }
  };

  const fetchPackages = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/packages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPackages(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des mariages:", error);
    }
  }

  
  useEffect(() => {
    fetchPackages();
    fetchMariages();
  }, []);

  return {
    formData,
    setFormData,
    packs,
    handleSubmit,
    errors,
    isLoading,
    mariages,
    packages,
  }
}

export default useMariage;