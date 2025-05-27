import React, { useState } from "react"
import { X, Upload, Video } from "lucide-react"

export default function GalleryVideoPopup({ onClose }) {
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
    //   onSubmit({
    //     name: selectedVideo.name,
    //   })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Ajouter une Vidéo</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            {selectedVideo ? (
              <div className="text-center">
                <Video className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <p className="text-gray-600 mb-2">Vidéo sélectionnée:</p>
                <p className="font-medium">{selectedVideo.name}</p>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="mt-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Changer la vidéo
                </button>
              </div>
            ) : (
              <div className="text-center">
                <Video className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-600 mb-2">Sélectionnez une vidéo</p>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                  id="gallery-video"
                />
                <label
                  htmlFor="gallery-video"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
                >
                  <Upload className="w-4 h-4" />
                  Choisir une vidéo
                </label>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={!selectedVideo}
              className={`flex-1 px-4 py-2 rounded text-white ${
                selectedVideo ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Ajouter
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
