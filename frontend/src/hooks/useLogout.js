import { useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post("/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return logout;
};

export default useLogout;
