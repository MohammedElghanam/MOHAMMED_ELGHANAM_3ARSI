import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
                <span className="text-2xl font-bold">3ARSI</span>
              </div>
              <p className="text-gray-400">La plateforme leader pour l'organisation de mariages au Maroc.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Photographe</li>
                <li>Salle de fête</li>
                <li>Traiteur</li>
                <li>Maquillage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Contact</li>
                <li>FAQ</li>
                <li>Aide</li>
                <li>Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="text-gray-400">
                <p>Email: contact@3arsi.ma</p>
                <p>Tél: +212 6 XX XX XX XX</p>
                <p>Casablanca, Maroc</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 3ARSI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
  )
}
