import React from 'react'
import usePack from '../hooks/usePack'

export default function CardPackages() {

    const { packages } = usePack();

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pack) => (
            <div
              key={pack.id}
              className="p-4 bg-pink-50 border border-pink-200 rounded shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-pink-800">{pack.name}</h3>
                <span className="bg-pink-500 text-white px-2 py-1 rounded">{pack.price} dh</span>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Services inclus:</p>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                    {pack.neggafa && <li>{pack.neggafa}</li>}
                    {pack.music_band && <li>{pack.music_band}</li>}
                    {pack.caterer && <li>{pack.caterer}</li>}
                    {pack.makeup && <li>{pack.makeup}</li>}
                    {pack.hair_style && <li>{pack.hair_style}</li>}
                    {pack.party_room && <li>{pack.party_room}</li>}
                    {pack.photographer && <li>{pack.photographer}</li>}
                    {pack.hotel && <li>{pack.hotel}</li>}
                    {pack.honeymoon && <li>{pack.honeymoon}</li>}
                </ul>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}
