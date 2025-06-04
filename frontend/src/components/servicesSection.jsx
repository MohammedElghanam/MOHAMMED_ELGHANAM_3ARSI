
import { Heart, Camera, Music, Utensils, Sparkles, MapPin, Users } from "lucide-react"


export default function ServicesSection() {

   const services = [
    { icon: Camera, name: "Photographe", description: "Immortalisez vos plus beaux moments" },
    { icon: Music, name: "Groupe Musical", description: "Ambiance musicale pour votre fête" },
    { icon: Utensils, name: "Traiteur", description: "Délices culinaires pour vos invités" },
    { icon: Sparkles, name: "Maquillage", description: "Mise en beauté professionnelle" },
    { icon: MapPin, name: "Salle de Fête", description: "Espaces élégants pour votre réception" },
    { icon: Users, name: "Neggafa", description: "Accompagnement traditionnel" },
    { icon: Sparkles, name: "Hair Style", description: "Coiffure professionnelle" },
    { icon: MapPin, name: "Hôtel", description: "Hébergement pour vos invités" },
    { icon: Heart, name: "Lune de Miel", description: "Voyages romantiques" },
  ]

  return (

    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600">Découvrez tous les services disponibles pour votre mariage</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className=" cursor-pointer border border-gray-300 rounded-lg p-6 bg-white  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h1 className="text-xl">{service.name}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
