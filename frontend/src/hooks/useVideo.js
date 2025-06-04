import { useEffect, useState } from 'react'
import axios from "../api/axios";

function useVideo(onClose) {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!selectedVideo) {
            newErrors.video = "L'video est requise.";
        }
        return newErrors;
    };

    const handleVideoUpload = (event) => {
        const file = event.target.files?.[0]
        if (file) {
        setSelectedVideo(file)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors({});
        setIsLoading(true);

        if (selectedVideo) {
            alert('Vidéo ajoutée avec succès !');
            onClose()
        }

        const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                setIsLoading(false);
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const form = new FormData();
            form.append("video", selectedVideo);

            const response = await axios.post("/videos", form, {
                headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
                },
            });

            alert("Video créé avec succès !");
            setVideos([...videos, response.data]);
            setSelectedVideo(null);
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

    }

    const fetchVideos = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("/videos", {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);          
            setVideos(response.data);
        } catch (error) {
            console.error("Erreur lors du chargement des videos:", error);
        }
    };

    useEffect(()=>{
        fetchVideos();
    },[])

    return {
        selectedVideo,
        setSelectedVideo,
        handleVideoUpload,
        handleSubmit,
        errors,
        isLoading,
        videos,
    }
}

export default useVideo;