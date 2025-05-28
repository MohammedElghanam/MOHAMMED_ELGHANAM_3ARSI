import { useState } from "react"

function useMariage(onClose) {

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
        alert(`Mariage créé avec succès ! ${formData}`)
        // console.log("Données du mariage:", formData)
        onClose()
    }

  return {
    formData,
    setFormData,
    packs,
    handleSubmit,
  }
}

export default useMariage;