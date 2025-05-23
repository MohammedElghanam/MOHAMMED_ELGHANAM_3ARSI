import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <>
        <main className=" relative container mx-auto px-4 py-12">
            <div className="absolute top-50 left-1/2 w-[300px] h-[300px] -z-10 bg-pink-500 rounded-full opacity-30 -translate-x-[10%] -translate-y-1/3 blur-[120px]"> h</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Crafting
                <br />
                Everlasting
                <br />
                Moments
                </h2>
                <p className="text-xl text-gray-700">
                Let Us Turn Your Special Day
                <br />
                Into an Unforgettable Memory.
                </p>
                <div className="flex items-center">
                <a
                    href="#book"
                    className="flex items-center bg-red-400 hover:bg-red-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
                >
                    Book A Wedding
                </a>
                <div className="ml-4 bg-red-400 p-4 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                </div>
                </div>
                <div className="relative mt-12">
                <div className="border-t border-dashed border-pink-300 w-64"></div>
                <div className="absolute -top-2 right-0">
                    <Heart className="h-4 w-4 text-pink-400" />
                </div>
                </div>
            </div>
            <div className="relative">
                <img
                src="/newlyweds1.png"
                width={500}
                height={600}
                alt="Wedding couple"
                className="rounded-lg mx-auto"
                priority
                />
                <div className="absolute top-8 right-0 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-5xl font-bold text-gray-900">10k+</div>
                <div className="text-gray-600">Wedding Hosts</div>
                <div className="mt-2">
                    <img
                    src="/newlyweds1.png"
                    width={150}
                    height={100}
                    alt="Wedding ceremony"
                    className="rounded-lg"
                    />
                </div>
                </div>
                <div className="absolute bottom-8 right-0 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-5xl font-bold text-gray-900">1978</div>
                <div className="text-gray-600">
                    We&apos;re in the
                    <br />
                    Market Since
                </div>
                </div>
            </div>
            </div>
        </main>
    </>
  )
}
