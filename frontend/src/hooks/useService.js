import { useEffect, useState } from "react";
import axios from "../api/axios"; 

const useService = (onClose) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    phone: "",
    price: "",
  });

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorPopup, setErrorPopup] = useState(""); 
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Le nom est requis.";
    if (!formData.type) newErrors.type = "Le type est requis.";
    if (!formData.phone) newErrors.phone = "Le téléphone est requis.";
    if (!formData.price) newErrors.price = "Le tarif est requis.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setErrorPopup("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      console.log("token:", token);
      console.log("data:", formData);
      
      
      const response = await axios.post("/services", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Service créé avec succès !");
      setFormData({ name: "", type: "", phone: "", price: "" });
      setServices([...services, response.data]);
      setErrors({});
      onClose();
    } catch (error) {
      if (error.response) {
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else if (error.response.data.message) {
          setErrorPopup(error.response.data.message);
        } else {
          setErrorPopup("Une erreur est survenue.");
        }
      } else {
          setErrorPopup("Impossible de se connecter au serveur.");
      }
    }
  };

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/services", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    formData,
    setFormData,
    handleSubmit,
    services,
    errors,
    isLoading,
    errorPopup,
  };
};

export default useService;
