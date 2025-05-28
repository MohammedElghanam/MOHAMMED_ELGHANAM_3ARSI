import { useState } from "react";

const useLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {}

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        loading,
        setLoading,
        handleSubmit
    }
}

export default useLogin