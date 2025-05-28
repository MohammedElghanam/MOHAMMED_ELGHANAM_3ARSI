import { useState } from 'react'

function useVideo(onClose) {
    const [selectedVideo, setSelectedVideo] = useState(null)

    const handleVideoUpload = (event) => {
        const file = event.target.files?.[0]
        if (file) {
        setSelectedVideo(file)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (selectedVideo) {
            alert('Vidéo ajoutée avec succès !');
            onClose()
        }
    }

    return {
        selectedVideo,
        setSelectedVideo,
        handleVideoUpload,
        handleSubmit,
    }
}

export default useVideo;