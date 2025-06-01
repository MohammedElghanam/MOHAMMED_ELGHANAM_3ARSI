import React from 'react'
import useImage from '../hooks/useImage'

export default function CardImages() {

    const { images } = useImage();

  return (
    <>
    <div className="grid grid-cols-2 gap-2">
      {images.map((img) => (
        <img
          key={img.id}
          src={`http://127.0.0.1:8000/storage/${img.image}`}
          alt={img.name}
          className="w-full h-24 object-cover rounded-lg"
        />
      ))}
    </div>
    </>
  )
}
