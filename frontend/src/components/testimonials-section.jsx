import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const testimonials = [
    {
      id: 1,
      title: "Thank you for managing everything on our behalf!",
      content:
        "The Best Wedding Planner in the World is You. We Appreciate the Wonderful Surprises and the Decorations.",
      name: "Nicolas Freeman",
      avatar: "./users/1.avif",
      rating: 5,
    },
    {
      id: 2,
      title: "Thank You Again for Making This Perfectionist Bride So Happy!",
      content: "We Got So Much Praise From Everyone and We Enjoyed All the Details They Planned.",
      name: "Louisa Nelson",
      avatar: "./users/2.avif",
      rating: 5,
    },
    {
      id: 3,
      title: "It Was Perfect! Thank You Again!",
      content: "We Want to Say Thanks for Being Such a Coordinator!",
      name: "Joan Adams",
      avatar: "./users/5.avif",
      rating: 5,
    },
    {
      id: 4,
      title: "You Kept Us on Track in the Lead Up to the Wedding.",
      content: "They Continued to Offer Support. They Offered Ideas Which Were Inspiring.",
      name: "Carmen Carpenter",
      avatar: "./users/7.avif",
      rating: 5,
    },
    {
      id: 5,
      title: "You Were and Are Fantastic!",
      content: "We Couldn't Have Done It Without You. Thanks!",
      name: "Carmen Carpenter",
      avatar: "./users/8.avif",
      rating: 5,
    },
    {
      id: 6,
      title: "With These Wonderful People, You Can Picture a Stress-free Wedding Day!",
      content:
        "It Looked Like Something Out of a Magazine. It Was Perfect! We Received So Many Compliments From Everyone.",
      name: "Carolyn Ford",
      avatar: "./users/4.webp",
      rating: 5,
    },
  ]

  const testimonialsPerPage = 6
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const getCurrentTestimonials = () => {
    const start = currentPage * testimonialsPerPage
    const end = start + testimonialsPerPage
    return testimonials.slice(start, end)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-16 mx-auto px-16 bg-pink-50 rounded-[50px]">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Client&apos;s Words</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevPage}
            className="w-12 h-12 rounded-full border border-red-300 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextPage}
            className="w-12 h-12 rounded-full border border-red-300 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {getCurrentTestimonials().map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{testimonial.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <div className="flex items-center mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <button className="text-red-500 hover:text-red-600 font-medium">View Images</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentPage ? "bg-red-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
