import { useState } from "react";

const usePost = ({ onClose }) => {

    const [formData, setFormData] = useState({
        image: null,
        description: "",
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
        setFormData({ ...formData, image: file });
        const url = URL.createObjectURL(file);
        setImagePreview(url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Post créé avec succès !");
        onClose()
        
    };

    
    return {
        formData,
        setFormData,
        imagePreview,
        setImagePreview,
        handleImageUpload,
        handleSubmit,
    }
}

export default usePost;