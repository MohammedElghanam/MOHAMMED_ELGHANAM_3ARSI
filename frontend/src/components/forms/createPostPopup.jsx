import usePost from "../../hooks/usePost";

export function CreatePostPopup({ onClose }) {
  
    const {
        formData,
        setFormData,
        imagePreview,
        setImagePreview,
        handleImageUpload,
        handleSubmit,
        errors,
        isLoading,
    } = usePost( onClose );

  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Créer un Post</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
            aria-label="Close popup"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Aperçu"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      className="mt-2 w-full border border-gray-300 rounded-md py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData({ ...formData, image: null });
                      }}
                    >
                      Changer l'image
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto mb-2 h-8 w-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                      />
                    </svg>
                    <p className="text-gray-600 mb-2">Ajoutez une image</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="post-image"
                    />
                    <label
                      htmlFor="post-image"
                      className="inline-flex cursor-pointer items-center rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v6m0-6v-6m0 0l3 3m-3-3l-3 3"
                        />
                      </svg>
                      Choisir une image
                    </label>
                  </div>
                )}
              </div>
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Décrivez votre service..."
                rows={4}
                className="w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? "Publier ..." : "Publier"}
              </button>
              <button
                type="button"
                className="flex-1 rounded border border-gray-300 py-2 text-gray-700 hover:bg-gray-100"
                onClick={onClose}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
