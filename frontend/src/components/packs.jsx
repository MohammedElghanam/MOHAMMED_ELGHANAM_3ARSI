import { ArrowRight, Check } from 'lucide-react';


export default function Packs() {

  const packs = [
    {
      name: "Pack Essentiel",
      price: "15,000 DH",
      services: ["Photographe", "Salle", "Traiteur"],
      popular: false,
    },
    {
      name: "Pack Premium",
      price: "25,000 DH",
      services: ["Photographe", "Salle", "Traiteur", "Maquillage", "Neggafa"],
      popular: true,
    },
    {
      name: "Pack Luxe",
      price: "40,000 DH",
      services: ["Tous les services inclus", "Décoration premium", "Vidéaste"],
      popular: false,
    },
  ]

  return (
     <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Packs</h2>
            <p className="text-lg text-gray-600">Choisissez le pack qui correspond à vos besoins et votre budget</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <div key={index} className={`relative ${pack.popular ? "ring-2 ring-pink-600 scale-105 rounded-3xl" : ""}`}>
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">Populaire</span>
                  </div>
                )}
                <div className={` ${pack.popular ? "rounded-3xl" : "bg-white rounded-lg shadow-lg border border-gray-200  h-full"} p-6`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                    <div className="text-3xl font-bold text-pink-600">{pack.price}</div>
                  </div>
                  <div>
                    <ul className="space-y-2 mb-6">
                      {pack.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={` ${pack.popular ? "bg-gray-900 text-white hover:bg-gray-800 transition duration-300" : " border border-gray-200 bg-white"} w-full py-2 px-4 rounded-lg flex items-center justify-center`}
                      variant={pack.popular ? "default" : "outline"}
                    >
                      Choisir ce pack
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}
