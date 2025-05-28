import { useState } from "react"

const useService = ( onClose ) => {
    const [formData, setFormData] = useState({
    nom: "",
    type: "",
    telephone: "",
    tarif: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Service créé avec succès !")
     onClose();
    // if (formData.nom && formData.type && formData.telephone && formData.tarif) {
    //   onClose()
    // }
  }

  return {
    formData,
    setFormData,
    handleSubmit,
  }
}

export default useService