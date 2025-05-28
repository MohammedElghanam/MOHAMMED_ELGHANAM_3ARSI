import { useState } from "react";

function useImage(onClose) {

    const [selectedImage, setSelectedImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0]
        if (file) {
        setSelectedImage(file)
        setImagePreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (selectedImage && imagePreview) {
        
            onClose()
        }
    }

  return {
    selectedImage,
    setSelectedImage,
    imagePreview,
    setImagePreview,
    handleImageUpload,
    handleSubmit,
  }
}

export default useImage;