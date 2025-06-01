import { useEffect, useState } from "react";
import axios from "../api/axios"; 

const usePost = ( onClose ) => {

    const [formData, setFormData] = useState({
        image: null,
        description: "",
    });

    const [posts, setPosts] = useState([]);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const validate = () => {
        const newErrors = {};
        if (!formData.description.trim()) {
        newErrors.description = "La description est requise.";
        }
        if (!formData.image) {
        newErrors.image = "L'image est requise.";
        }
        return newErrors;
    };

    const handleImageUpload = (event) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
        setFormData({ ...formData, image: file });
        const url = URL.createObjectURL(file);
        setImagePreview(url);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsLoading(false);
        return;
        }

        try {
        const token = localStorage.getItem("token");
        const form = new FormData();
        form.append("image", formData.image);
        form.append("description", formData.description);

        await axios.post("/posts", form, {
            headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            },
        });

        alert("Post créé avec succès !");
        setFormData({ image: null, description: "" });
        setImagePreview(null);
        // fetchPosts();
        onClose();
        } catch (error) {
        if (error.response && error.response.data?.errors) {
            setErrors(error.response.data.errors);
        } else {
            alert("Erreur lors de la création du post.");
        }
        } finally {
        setIsLoading(false);
        }
    };

    const fetchPosts = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("/posts", {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            
            setPosts(response.data);
        } catch (error) {
        console.error("Erreur lors du chargement des posts:", error);
        }
    };

    useEffect(() => {
      fetchPosts();
    }, [posts]);
    
    return {
        formData,
        setFormData,
        imagePreview,
        setImagePreview,
        handleImageUpload,
        handleSubmit,
        errors,
        isLoading,
        posts,
        fetchPosts,
    }
}

export default usePost;