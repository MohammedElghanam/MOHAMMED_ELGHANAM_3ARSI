import React, { useState } from "react"
import { X, Upload, ImageIcon } from "lucide-react"

export default function GalleryImagePopup({ onClose }) {
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
    //   onSubmit({
    //     url: imagePreview,
    //     name: selectedImage.name,
    //   })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Ajouter une Image</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Aperçu"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSelectedImage(null)
                    setImagePreview(null)
                  }}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Changer l'image
                </button>
              </div>
            ) : (
              <div className="text-center">
                <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-600 mb-2">Sélectionnez une image</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="upload-image"
                />
                <label
                  htmlFor="upload-image"
                  className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choisir une image
                </label>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={!selectedImage}
              className={`flex-1 px-4 py-2 rounded-md text-white ${
                selectedImage
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-300 cursor-not-allowed"
              }`}
            >
              Ajouter
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
