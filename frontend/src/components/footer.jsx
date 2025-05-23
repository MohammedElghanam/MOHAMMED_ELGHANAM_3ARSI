import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* CTA Banner */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-gray-900 rounded-3xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-1/2 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Looking for Custom Wedding?</h2>
              <p className="text-gray-300 mb-8 max-w-md">
                Unlock the Doors to Your Future by Planning Your Wedding With Wedlock - A Wedding Planner
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="md:w-1/2 relative min-h-[300px]">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Happy wedding couple"
                fill
                className="object-cover object-center"
              />
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white opacity-10"></div>
              <div className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-white opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900">Wedlock</h2>
            </div>

            <nav className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              <a href="#services" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900">
                Portfolio
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-gray-900">
                Reviews
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </nav>

            <div className="flex space-x-4">
              <a href="#" className="text-red-400 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-red-400 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-red-400 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
