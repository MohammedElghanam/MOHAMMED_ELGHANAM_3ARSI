import { useEffect, useState } from "react";
import axios from "../api/axios";

function useImage(onClose) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateImage = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!allowedTypes.includes(file.type)) {
      return "Le format de l'image doit être JPEG, PNG ou WEBP.";
    }
    if (file.size > maxSize) {
      return "La taille de l'image ne doit pas dépasser 2MB.";
    }
    return null;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validationError = validateImage(file);
      if (validationError) {
        setErrors(validationError);
        setSelectedImage(null);
        setImagePreview(null);
        return;
      }

      setErrors(null);
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setErrors("Veuillez sélectionner une image.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/images", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setErrors(null);
      setSelectedImage(null);
      setImagePreview(null);
      setImages([...images, response.data]);
      onClose();
    } catch (error) {
      if (error.response?.data?.message) {
        setErrors(error.response.data.message);
      } else {
        setErrors("Une erreur est survenue.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/images", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setImages(response.data || []);
    } catch (error) {
      setErrors("Erreur lors du chargement des images.");
    } finally {
      setIsLoading(false);
    }
  };

  
  useEffect(() => {
    fetchImages();
  }, []);

  return {
    selectedImage,
    setSelectedImage,
    imagePreview,
    setImagePreview,
    handleImageUpload,
    handleSubmit,
    images,
    isLoading,
    errors,
  };
}

export default useImage;
