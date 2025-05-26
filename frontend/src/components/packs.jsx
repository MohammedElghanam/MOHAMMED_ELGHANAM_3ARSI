import { ArrowRight, Check } from 'lucide-react';

export default function Packs() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Package Price for You</h2>
        <div className="flex items-center mt-4 md:mt-0">
          <div className="flex -space-x-2 mr-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src="./users/2.avif" alt="Client" width={40} height={40} />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src="./users/8.avif" alt="Client" width={40} height={40} />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src="./users/1.avif" alt="Client" width={40} height={40} />
            </div>
          </div>
          <span className="text-lg font-semibold">520k Happy Clients</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Package */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <div className="flex items-center mb-6">
            <div className="mr-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z"
                  fill="black"
                />
                <path d="M18 9V18L25.5 22.5L27 20.1L21 16.5V9H18Z" fill="black" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">Starter</h3>
          </div>

          <div className="text-4xl font-bold text-red-500 mb-6">$2,400</div>

          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-4">Includes Modification in All the Old Customs</p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-gray-900" />
                <span>Planning & Decor</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-gray-900" />
                <span>Food Court</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-gray-900" />
                <span>Photographers & 10+ more</span>
              </li>
            </ul>
          </div>

          <div className="flex">
            <button className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 rounded-full font-medium">
              <span>Choose Package</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Standard Package */}
        <div className="bg-gray-900 text-white rounded-3xl p-8 transform scale-105">
          <div className="flex items-center mb-6">
            <div className="mr-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 3L3 10.5L18 18L33 10.5L18 3Z" fill="white" />
                <path d="M3 25.5L18 33L33 25.5V10.5L18 18L3 10.5V25.5Z" fill="white" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">Standard</h3>
          </div>

          <div className="text-4xl font-bold text-white mb-6">$5,000</div>

          <div className="mb-8">
            <p className="text-gray-300 font-medium mb-4">Includes All Amenities Such as</p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-white" />
                <span>Venue Selection</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-white" />
                <span>Food Court</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-white" />
                <span>Hospitality</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-white" />
                <span>Choreography & 20+ more</span>
              </li>
            </ul>
          </div>

          <div className="flex">
            <button className="flex items-center justify-between bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium w-full">
              <span>Choose Package</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Premium Package */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <div className="flex items-center mb-6">
            <div className="mr-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 3L21.3 13.2H32.1L23.4 19.5L26.7 29.7L18 23.4L9.3 29.7L12.6 19.5L3.9 13.2H14.7L18 3Z"
                  fill="black"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">Premium</h3>
          </div>

          <div className="text-4xl font-bold text-red-500 mb-6">$7,900</div>

          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-4">Includes All the Customization in the Destination</p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-gray-900" />
                <span>Pre-Wedding Shoot</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-gray-900" />
                <span>Bridal Wear</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-gray-900" />
                <span>Honeymoon & 30+ more</span>
              </li>
            </ul>
          </div>

          <div className="flex">
            <button className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 rounded-full font-medium">
              <span>Choose Package</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
