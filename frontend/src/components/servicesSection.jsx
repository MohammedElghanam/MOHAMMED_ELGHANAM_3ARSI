import { ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Pre-Wedding",
      image: "/placeholder.svg?height=400&width=400",
      services: ["Invitation", "Venue Selection", "Gift Hampers", "Accessories", "Bridal Shower", "22+ more"],
    },
    {
      title: "Wedding Day",
      image: "/placeholder.svg?height=400&width=400",
      services: ["Photography", "Hospitality", "Choreography", "Decor", "Fireworks", "32+ more"],
    },
    {
      title: "Post-Wedding",
      image: "/placeholder.svg?height=400&width=400",
      services: ["First Night", "Wedding Decor", "Car Decor", "Honeymoon", "Gateways", "12+ more"],
    },
  ]

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0">Services We&apos;re Offering</h2>
        <button className="flex items-center justify-between px-6 py-3 rounded-full border border-red-300 text-red-500 hover:bg-red-50 transition-colors">
          All Services
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative h-96 rounded-3xl overflow-hidden mb-6">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>

              {/* Service tags */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2">
                  {service.services.map((item, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-3 py-1 bg-black bg-opacity-60 text-white text-sm rounded-full backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 text-center">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
