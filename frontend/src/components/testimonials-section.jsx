export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Fatima Zahra",
      message: "Un mariage de rêve, tout était parfait !",
      image: "/portfolio/1.jpg"
    },
    {
      name: "Ahmed El Amrani",
      message: "Une organisation impeccable, merci 3ARSI !",
      image: "/portfolio/3.jpg"
    },
    {
      name: "Sara Bensalah",
      message: "Des souvenirs inoubliables, je recommande vivement !",
      image: "/portfolio/2.jpg"
    },
    {
      name: "Fatima Zahra",
      message: "Un mariage de rêve, tout était parfait !",
      image: "/portfolio/4.jpg"
    },
    {
      name: "Ahmed El Amrani",
      message: "Une organisation impeccable, merci 3ARSI !",
      image: "/portfolio/5.jpg"
    },
    {
      name: "Sara Bensalah",
      message: "Des souvenirs inoubliables, je recommande vivement !",
      image: "/portfolio/6.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600">Découvrez quelques-uns des mariages organisés via notre plateforme</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={`Mariage de ${item.name}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-white text-lg font-semibold">{item.name}</p>
                  <p className="text-white mt-2">{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}