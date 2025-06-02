import { useState } from "react"
import CreatePackPopup from "./createPackPopup"
import { CreateWeddingForm } from "./createWeddingForm"
import GalleryImagePopup from "./galleryImagePopup"
import GalleryVideoPopup from "./galleryVideoPopup"
import CardVideos from "../cardVideos"
import CardImages from "../cardImages"
import DashboardNav from "../dashboardNav"
import CardPackages from "../cardPackages"
import CardMariage from "../cardMariage"

import { Video, Image, Calendar, Plus } from 'lucide-react'
import useImage from "../../hooks/useImage"
import useVideo from "../../hooks/useVideo"


export default function BrideDashboard() {

  const { images } = useImage();
  const { videos } = useVideo();
  
  const [showCreatePack, setShowCreatePack] = useState(false)
  const [showCreateWedding, setShowCreateWedding] = useState(false)
  const [showImageGallery, setShowImageGallery] = useState(false)
  const [showVideoGallery, setShowVideoGallery] = useState(false)

  return (
    <div className="space-y-8 p-4 max-w-6xl mx-auto">
      <DashboardNav />
      {/* Packs Section */}
      <div className="border rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-pink-600">
            <Plus className="w-5 h-5 mx-auto text-pink-500" />
            Mes Packs
          </h2>
          <button
            onClick={() => setShowCreatePack(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <Plus className="w-5 h-5 mx-auto text-white" />
            Créer Pack
          </button>
        </div>
        <div>
          <CardPackages />
        </div>
      </div>

      {/* Weddings Section */}
      <div className="border rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-purple-600">
            <Calendar className="w-5 h-5 mx-auto text-purple-600" />
            Mes Mariages
          </h2>
          <button
            onClick={() => setShowCreateWedding(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded flex items-center"
          >
            <Plus className="w-5 h-5 mx-auto text-white" />
            Créer Mariage
          </button>
        </div>
        <div>
          <CardMariage />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="border rounded-lg shadow-sm p-6">
        <div className="mb-4 flex justify-start items-start gap-3 ">
          <Image className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-blue-600"> Ma Galerie</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Images ({images.length})</h3>
              <button
                onClick={() => setShowImageGallery(true)}
                className="border border-blue-500 text-blue-500 px-3 py-1 rounded flex justify-center gap-4 items-center text-sm hover:bg-blue-50"
              >
                <Image className="w-5 h-5 mx-auto text-blue-600" />
                Ajouter Image
              </button>
            </div>
            <div>
              <CardImages />
            </div>
          </div>

          {/* Videos */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Vidéos ({videos.length})</h3>
              <button
                onClick={() => setShowVideoGallery(true)}
                className="border border-gray-500 text-gray-600 px-3 py-1 rounded flex justify-center gap-4 items-center text-sm hover:bg-gray-100"
              >
                <Video className="w-5 h-5 mx-auto text-gray-600" />
                Ajouter Vidéo
              </button>
            </div>
            <div>
              <CardVideos />
            </div>
          </div>
        </div>
      </div>

      {/* Example of simple popup buttons - just placeholders */}
      {showCreatePack && (
        <div>
          <CreatePackPopup onClose={() => setShowCreatePack(false)} /> 
        </div>
      )}

      {showCreateWedding && (
        <div>
          <CreateWeddingForm onClose={() => setShowCreateWedding(false)} />
        </div>
      )}

      {showImageGallery && (
        <div>
          <GalleryImagePopup onClose={() => setShowImageGallery(false)} />
        </div>
      )}

      {showVideoGallery && (
        <div>
          <GalleryVideoPopup onClose={() => setShowVideoGallery(false)} /> 
        </div>
      )}
   

    </div>
  )
}