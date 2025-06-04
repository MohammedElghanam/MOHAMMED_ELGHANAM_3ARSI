import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios"; 

const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("mariee");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorPopup, setErrorPopup] = useState(""); 

  const navigate = useNavigate();

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

    const formData = {
        name,
        email,
        password,
        role,
    }

    // alert(formData);

    try {
        const response = await axios.post(`/register`, formData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (response.status === 201) {
            navigate("/login");
        }

      
      
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
    } finally {
      setIsLoading(false);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Ce champ est obligatoire";
    if (!email.trim()) newErrors.email = "Ce champ est obligatoire";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Adresse email invalide";
    if (!password.trim()) newErrors.password = "Ce champ est obligatoire";
    else if (password.length < 6) newErrors.password ="Le mot de passe doit contenir au moins 6 caractères";
    if (password !== confirmPassword) newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    return newErrors;
  };

  return {
    name, setName,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    role, setRole,
    errors,
    isLoading,
    errorPopup,
    handleSubmit,
  };
};

export default useRegister;
