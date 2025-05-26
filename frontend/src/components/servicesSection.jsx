import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // تأخير أكبر يعني كل واحد يطلع ببطء بعد الآخر
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },  // بداية أسفل بشوية ومخفي
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",      // حركة ناعمة بلا هزّاز
      ease: "easeOut",
      duration: 0.7,      // مدة أطول للطلوع باش يكون ببطء
    },
  },
};

export default function ServicesSection() {
  const services = [
    {
      title: "Avant le mariage",
      image: "/8.jpg",
      services: ["Invitation", "Venue Selection", "Gift Hampers", "Accessories", "Bridal Shower", "22+ more"],
    },
    {
      title: "Jour du mariage",
      image: "/7.jpg",
      services: ["Photography", "Hospitality", "Choreography", "Decor", "Fireworks", "32+ more"],
    },
    {
      title: "Après le mariage",
      image: "/13.jpg",
      services: ["First Night", "Wedding Decor", "Car Decor", "Honeymoon", "Gateways", "12+ more"],
    },
  ]

  return (
    <section className="py-16 w-full mx-auto px-16 bg-white rounded-t-[50px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-0">Services que nous offrons</h2>
        <button className="flex items-center justify-between">
            <div className=" relative flex items-center justify-center">
                <div className=" w-8 h-2 bg-white absolute right-10"></div>
                <a href="#" className="text-gray-800 text-sm font-semibold border px-10 py-3 rounded-full text-pink-500 border-pink-500 bg-white">All Services</a>
                <div className="w-12 h-12 rounded-full border text-pink-500 border-pink-500 flex items-center justify-center bg-white -ml-[1.5px]">
                    <ArrowRight className="w-5 h-5 text-pink-500" />
                </div>
            </div>
        </button>
      </div>

      <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="group cursor-pointer rounded-3xl overflow-hidden "
          variants={cardVariants}
        >
          <div className="relative h-96 mb-6">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl"></div>

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

          <h3 className="text-2xl font-bold text-gray-900 text-center">
            {service.title}
          </h3>
        </motion.div>
      ))}
    </motion.div>

    </section>
  )
}
