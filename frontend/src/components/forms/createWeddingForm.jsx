"use client"

import { useState } from "react"
import { X, Calendar, MapPin, Phone, Users } from "lucide-react"

export function CreateWeddingForm({ onClose }) {
  const [formData, setFormData] = useState({
    nomMariee: "",
    nomMarie: "",
    date: "",
    lieu: "",
    ville: "",
    telephone: "",
    invites: "",
    pack: "",
  })

  const packs = [
    { id: "basic", name: "Pack Basique", price: 5000 },
    { id: "premium", name: "Pack Premium", price: 8000 },
    { id: "luxury", name: "Pack Luxe", price: 12000 },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Données du mariage:", formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Calendar className="w-5 h-5" />
            Créer un Nouveau Mariage
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Bride's Name */}
              <div className="space-y-2">
                <label htmlFor="nom-mariee" className="block text-sm font-medium">Nom de la Mariée</label>
                <input
                  id="nom-mariee"
                  type="text"
                  placeholder="Fatima"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.nomMariee}
                  onChange={(e) => setFormData({ ...formData, nomMariee: e.target.value })}
                  required
                />
              </div>

              {/* Groom's Name */}
              <div className="space-y-2">
                <label htmlFor="nom-marie" className="block text-sm font-medium">Nom du Marié</label>
                <input
                  id="nom-marie"
                  type="text"
                  placeholder="Ahmed"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.nomMarie}
                  onChange={(e) => setFormData({ ...formData, nomMarie: e.target.value })}
                  required
                />
              </div>

              {/* Date Field */}
              <div className="space-y-2">
                <label htmlFor="date" className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  Date du Mariage
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              {/* Location Field */}
              <div className="space-y-2">
                <label htmlFor="lieu" className="flex items-center gap-2 text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  Lieu
                </label>
                <input
                  id="lieu"
                  placeholder="Lieu du mariage"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={formData.lieu}
                  onChange={(e) => setFormData({ ...formData, lieu: e.target.value })}
                  required
                />
              </div>

                <div className="space-y-2">
                    <label htmlFor="ville" className="block text-sm font-medium">Ville</label>
                    <input
                        id="ville"
                        type="text"
                        placeholder="Casablanca"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={formData.ville}
                        onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                        required
                    />
                </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label htmlFor="telephone" className="flex items-center gap-2 text-sm font-medium">
                  <Phone className="w-4 h-4" />
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  required
                />
              </div>

              {/* Guests Field */}
              <div className="space-y-2">
                <label htmlFor="invites" className="flex items-center gap-2 text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Nombre d'Invités
                </label>
                <input
                  id="invites"
                  type="number"
                  placeholder="Nombre d'invités"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={formData.invites}
                  onChange={(e) => setFormData({ ...formData, invites: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Pack Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Sélection du Pack</label>
              <select
                value={formData.pack}
                onChange={(e) => setFormData({ ...formData, pack: e.target.value })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Choisissez un pack</option>
                {packs.map((pack) => (
                  <option key={pack.id} value={pack.id}>
                    {pack.name} - {pack.price}€
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md transition"
              >
                Créer le Mariage
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-md transition"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}