import { useState } from "react";
import axios from "../api/axios"; 
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorPopup, setErrorPopup] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Validation des champs
  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Ce champ est obligatoire";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Adresse email invalide";
    if (!password.trim()) newErrors.password = "Ce champ est obligatoire";
    else if (password.length < 6) newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
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
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`/login`, {
        email,
        password,
      });

      if (response.status === 201) {
        const userRole = response.data.user.role;

        localStorage.setItem('token', response.data.token);

        // Redirection selon role
        if (userRole === "mariee") {
          navigate("/espace/mariee");
        } else if (userRole === "prestatair") {
          navigate("/espace/prestatair");
        } else {
          navigate("/"); // ou page par défaut
        }
      }
    } catch (error) {
      if (error.response) {
        // Si backend renvoie des erreurs de validation (ex: 422)
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
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    errorPopup,
    isLoading,
    handleSubmit,
  };
};

export default useLogin;
