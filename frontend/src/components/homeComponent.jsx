import { Megaphone } from 'lucide-react';
import { motion  } from "framer-motion";

export default function HomeComponent() {
  return (
    <>
        <main className=" relative ">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center ">

                <div className="space-y-8 col-span-1 lg:col-span-1 h-full flex flex-col justify-center items-start px-10 lg:px-20">
                    <h2 className="text-5xl md:text-8xl font-semibold text-gray-900 leading-tight"> Votre Mariage de Rêve </h2> 
                    <p className="text-2xl text-gray-900"> Organisez le plus beau jour de votre vie avec 3ARSI. Trouvez les meilleurs prestataires et créez votre pack personnalisé. </p>
                    <div className="flex items-center">
                    <a
                        href="/login"
                        className="flex items-center bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
                    >
                        Réserver un mariage
                    </a>
                    </div>
                </div>
                <div className="relative col-span-1 h-full flex items-center justify-center pt-52">
                    <div className=" w-[300px] h-[300px] -z-10 bg-pink-500 rounded-full opacity-60 -translate-x-[10%] -translate-y-1/3 blur-[140px]"></div>
                    
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="absolute top-10 left-16 bg-white rounded-lg p-4 shadow-lg border border-gray-400 z-10"
                        >
                        <div className="text-5xl font-bold text-gray-700">10k+</div>
                        <div className="text-gray-600">Wedding Hosts</div>
                        <div className="mt-2">
                            <img
                            src="/4.jpg"
                            width={200}
                            height={50}
                            alt="Wedding ceremony"
                            className="rounded-lg object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="absolute bottom-[135px] left-[100px] flex items-center justify-center gap-4 bg-white rounded-lg border border-pink-500 p-4 bg-opacity-50"
                        >
                        <Megaphone className="w-8 h-8 text-pink-500" />
                        <div>
                            <div className="text-xl font-bold text-gray-700">1978</div>
                            <div className="text-gray-600 text-sm">
                            We&apos;re in the Market Since
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ x: 300, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ type: "spring", stiffness: 100, damping: 10 }} 
                        className="absolute top-[120px] right-[185px] flex items-center justify-center gap-4 bg-white rounded-lg border border-[#7F55B1] p-4 bg-opacity-50"
                        >
                        <Megaphone className="w-8 h-8 text-[#7F55B1]" />
                        <div>
                            <div className="text-xl font-bold text-gray-700">1978</div>
                            <div className="text-gray-600 text-sm">
                            We&apos;re in the Market Since
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="absolute bottom-10 right-[150px] bg-white rounded-lg p-4 shadow-lg border border-gray-400 "
                        >
                        <div className="text-5xl font-bold text-gray-700">+300</div>
                        <div className="text-gray-600">More than 300 weddings</div>
                        <div className="mt-2">
                            <img
                            src="/5.jpg"
                            width={200}
                            height={10}
                            alt="Wedding ceremony"
                            className="rounded-lg object-cover"
                            />
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </main>
    </>
  )
}
