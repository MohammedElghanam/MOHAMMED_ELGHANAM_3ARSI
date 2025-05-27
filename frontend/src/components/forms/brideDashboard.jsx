import { useState } from "react"
import CreatePackPopup from "./createPackPopup"
import { CreateWeddingForm } from "./createWeddingForm"
import GalleryImagePopup from "./galleryImagePopup"
import GalleryVideoPopup from "./galleryVideoPopup"

// Simple icons as SVG inline for example (you can replace with your own)
const PackageIcon = () => (
  <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 3v18M3 12h18" />
  </svg>
)
const PlusIcon = () => (
  <svg className="w-4 h-4 mr-2 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 4v16M4 12h16" />
  </svg>
)
const CalendarIcon = () => (
  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)
const ImageIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)
const VideoIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M23 7l-7 5 7 5V7z" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
)

const mockPacks = [
  {
    id: "1",
    nom: "Pack Premium",
    services: ["Traiteur Premium", "Photographe Pro", "Neggafa Traditionnelle"],
    prixTotal: 4200,
  },
  {
    id: "2",
    nom: "Pack Luxe",
    services: ["Traiteur Luxe", "Groupe Musique", "Make Up Pro", "Salle VIP"],
    prixTotal: 7800,
  },
]

const mockWeddings = [
  {
    id: "1",
    nomMariee: "Fatima",
    nomMarie: "Ahmed",
    date: "2024-06-15",
    lieu: "Villa des Roses",
    ville: "Casablanca",
    telephone: "+212 6 11 22 33 44",
    nombreInvites: 150,
  },
]

const mockGalleryImages = [
  { id: "1", url: "/placeholder.svg?height=200&width=200", name: "Photo 1" },
  { id: "2", url: "/placeholder.svg?height=200&width=200", name: "Photo 2" },
]

const mockGalleryVideos = [
  { id: "1", name: "Video mariage 1.mp4" },
  { id: "2", name: "Video preparation.mp4" },
]

export default function BrideDashboard() {
  const [showCreatePack, setShowCreatePack] = useState(false)
  const [showCreateWedding, setShowCreateWedding] = useState(false)
  const [showImageGallery, setShowImageGallery] = useState(false)
  const [showVideoGallery, setShowVideoGallery] = useState(false)
  const [packs, setPacks] = useState(mockPacks)
  const [weddings, setWeddings] = useState(mockWeddings)
  const [galleryImages, setGalleryImages] = useState(mockGalleryImages)
  const [galleryVideos, setGalleryVideos] = useState(mockGalleryVideos)

  // Simple handlers that just add new items, no popups implemented here
  const handleCreatePack = (packData) => {
    const newPack = { id: Date.now().toString(), ...packData }
    setPacks([newPack, ...packs])
  }

  const handleCreateWedding = (weddingData) => {
    const newWedding = { id: Date.now().toString(), ...weddingData }
    setWeddings([newWedding, ...weddings])
  }

  return (
    <div className="space-y-8 p-4 max-w-6xl mx-auto">
      {/* Packs Section */}
      <div className="border rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-pink-600">
            <PackageIcon />
            Mes Packs
          </h2>
          <button
            onClick={() => setShowCreatePack(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center"
          >
            <PlusIcon />
            Créer Pack
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className="p-4 bg-pink-50 border border-pink-200 rounded shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-pink-800">{pack.nom}</h3>
                <span className="bg-pink-500 text-white px-2 py-1 rounded">{pack.prixTotal}€</span>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Services inclus:</p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  {pack.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weddings Section */}
      <div className="border rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-purple-600">
            <CalendarIcon />
            Mes Mariages
          </h2>
          <button
            onClick={() => setShowCreateWedding(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded flex items-center"
          >
            <PlusIcon />
            Créer Mariage
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weddings.map((wedding) => (
            <div
              key={wedding.id}
              className="p-4 bg-purple-50 border border-purple-200 rounded shadow-sm"
            >
              <h3 className="font-semibold text-purple-800 mb-3">
                {wedding.nomMariee} &amp; {wedding.nomMarie}
              </h3>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Date:</strong> {wedding.date}
                </p>
                <p>
                  <strong>Lieu:</strong> {wedding.lieu}, {wedding.ville}
                </p>
                <p>
                  <strong>Téléphone:</strong> {wedding.telephone}
                </p>
                <p>
                  <strong>Invités:</strong> {wedding.nombreInvites}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="border rounded-lg shadow-sm p-6">
        <div className="mb-4">
          <h2 className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <ImageIcon />
            Ma Galerie
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Images ({galleryImages.length})</h3>
              <button
                onClick={() => setShowImageGallery(true)}
                className="border border-blue-500 text-blue-500 px-3 py-1 rounded flex items-center text-sm hover:bg-blue-50"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Ajouter Image
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {galleryImages.map((img) => (
                <img
                  key={img.id}
                  src={img.url || "/placeholder.svg"}
                  alt={img.name}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Videos */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Vidéos ({galleryVideos.length})</h3>
              <button
                onClick={() => setShowVideoGallery(true)}
                className="border border-gray-500 text-gray-600 px-3 py-1 rounded flex items-center text-sm hover:bg-gray-100"
              >
                <VideoIcon className="w-4 h-4 mr-2" />
                Ajouter Vidéo
              </button>
            </div>
            <div className="space-y-2">
              {galleryVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center gap-2 p-2 bg-gray-50 rounded"
                >
                  <VideoIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{video.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Note: Popup components are omitted since you asked only for the main component */}
      {/* You can implement your own modals/popups for create pack/wedding/image/video */}

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