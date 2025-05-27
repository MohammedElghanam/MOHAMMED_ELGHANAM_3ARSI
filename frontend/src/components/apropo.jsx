import { Heart, Users, Star } from "lucide-react"

export default function Apropo() {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              3ARSI est la plateforme leader au Maroc pour l'organisation de mariages. Nous connectons les futurs mariés
              avec les meilleurs prestataires du royaume pour créer des célébrations inoubliables.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">Nous mettons tout notre cœur dans chaque projet</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Seuls les meilleurs prestataires font partie de notre réseau</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
              <p className="text-gray-600">Nous vous guidons à chaque étape de votre organisation</p>
            </div>
          </div>
        </div>
    </section>
  )
}
