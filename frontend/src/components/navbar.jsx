import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <>
        <div class=" relative font-sans w-full py-8 px-10">
            <div className="absolute top-50 left-10 w-[300px] h-[300px] -z-10 bg-pink-500 rounded-full opacity-20 -translate-x-[10%] -translate-y-1/3 blur-[120px]"> h</div>
            <div class=" bg-white rounded-full border boreder-gray-200 ">
                <div class="container mx-auto">
                    <div class="flex items-center justify-between py-2">
                        
                            <div>
                                <img className=' w-16 h-16 ' src="./LOGO.svg" alt="" />
                            </div>

                            <div class=" flex items-center justify-center gap-6">
                                <a href="#" class="text-gray-600 text-sm font-semibold hover:text-pink-500 mr-4">ACCUEIL</a>
                                <a href="#" class="text-gray-600 text-sm font-semibold hover:text-pink-500 mr-4">À PROPOS DE NOUS</a>
                                <a href="#" class="text-gray-600 text-sm font-semibold hover:text-pink-500 mr-4">SERVICES</a>
                                <a href="#" class="text-gray-600 text-sm font-semibold hover:text-pink-500">PACKS</a>
                                <a href="#" class="text-gray-600 text-sm font-semibold hover:text-pink-500">PORTFLIO</a>
                            </div>

                        <div className=" relative flex items-center justify-center">
                            <div className=" w-8 h-2 bg-white absolute right-10"></div>
                            <a
                                href="#"
                                className="text-gray-800 text-sm font-semibold border px-10 py-3 rounded-full text-pink-500 border-pink-500 bg-white"
                            >
                                Sign up
                            </a>

                            <div className="w-12 h-12 rounded-full border text-pink-500 border-pink-500 flex items-center justify-center bg-white -ml-[1.5px]">
                                <ArrowRight className="w-5 h-5 text-pink-500" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
