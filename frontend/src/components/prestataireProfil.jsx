

import { ArrowLeft, Phone, MapPin, Star, Heart, MessageCircle } from "lucide-react"


export function PrestataireProfilPage({ prestataire, onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header avec bouton retour */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour</span>
          </button>
        </div>

        {/* Profil header - style Instagram */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Photo de profil */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200">
              <img
                src={prestataire.photo || "/placeholder.svg"}
                alt={prestataire.nom}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Informations */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">{prestataire.nom}</h1>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>Contacter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>Suivre</span>
                  </button>
                </div>
              </div>

              {/* Stats style Instagram */}
              <div className="flex space-x-6 mb-4">
                <div className="text-center">
                  <div className="font-bold text-lg">{prestataire.posts.length}</div>
                  <div className="text-gray-600 text-sm">Publications</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">1.2k</div>
                  <div className="text-gray-600 text-sm">Abonnés</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{prestataire.nbAvis}</div>
                  <div className="text-gray-600 text-sm">Avis</div>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-pink-600">{prestataire.service}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{prestataire.note}/5</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{prestataire.ville}</span>
                </div>
                <p className="text-gray-700">{prestataire.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des posts - style Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {prestataire.posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.description}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-5 w-5" />
                        <span>12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <p className="text-gray-800 text-sm line-clamp-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
