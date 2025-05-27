import React, { useState } from "react"
import { X } from "lucide-react"

export default function CreateServicePopup({ onClose, serviceTypes }) {
  const [formData, setFormData] = useState({
    nom: "",
    type: "",
    telephone: "",
    tarif: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.nom && formData.type && formData.telephone && formData.tarif) {
    //   onSubmit({
    //     ...formData,
    //     tarif: parseInt(formData.tarif),
    //   })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Créer un Service</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
              Nom du Service
            </label>
            <input
              id="nom"
              type="text"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              required
              placeholder="Ex: Traiteur Premium"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type de Service
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="" disabled>Sélectionnez le type</option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              id="telephone"
              type="tel"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              required
              placeholder="+212 6 12 34 56 78"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="tarif" className="block text-sm font-medium text-gray-700">
              Tarif (€)
            </label>
            <input
              id="tarif"
              type="number"
              value={formData.tarif}
              onChange={(e) => setFormData({ ...formData, tarif: e.target.value })}
              required
              placeholder="500"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Créer Service
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
