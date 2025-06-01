import { X } from "lucide-react"
import useService from "../../hooks/useService"

export default function CreateServicePopup({ onClose, serviceTypes }) {
  
    const {
        formData,
        setFormData,
        handleSubmit,
        errors,
        isLoading,
        errorPopup,
    } = useService(onClose);

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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom du Service
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Traiteur Premium"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type de Service
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="" disabled>Sélectionnez le type</option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+212 6 12 34 56 78"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Tarif (dh)
            </label>
            <input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              placeholder="500"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              disabled={isLoading}
            >
              {isLoading ? "Création du service..." : "Créer Service"}
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
        {errorPopup && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {errorPopup}
          </div>
        )}
      </div>
    </div>
  )
}
