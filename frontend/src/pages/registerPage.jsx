
import { useState } from "react"
import { Heart, User, Mail, Lock } from "lucide-react"


export function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("mariee")
  const [error, setError] = useState("")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError("")

//     if (!name || !email || !password || !confirmPassword) {
//       setError("Veuillez remplir tous les champs")
//       return
//     }

//     if (password !== confirmPassword) {
//       setError("Les mots de passe ne correspondent pas")
//       return
//     }

//     if (password.length < 6) {
//       setError("Le mot de passe doit contenir au moins 6 caractères")
//       return
//     }

//     try {
//       const success = await register(name, email, password, role)
//       if (success) {
//         onNavigate("dashboard")
//       } else {
//         setError("Une erreur est survenue lors de l'inscription")
//       }
//     } catch (err) {
//       setError("Une erreur est survenue")
//     }
//   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-pink-600" />
            <span className="text-2xl font-bold text-gray-900">3ARSI</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Inscription</h1>
          <p className="text-gray-600">Créez votre compte pour commencer à organiser votre mariage</p>
        </header>

        <form 
            // onSubmit={handleSubmit} 
            className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom complet
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="name"
                type="text"
                placeholder="Votre nom complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Je suis :</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="mariee"
                  type="radio"
                  name="role"
                  value="mariee"
                  checked={role === "mariee"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                />
                <label htmlFor="mariee" className="ml-2 text-sm text-gray-700">
                  Futur(e) marié(e)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="prestatair"
                  type="radio"
                  name="role"
                  value="prestatair"
                  checked={role === "prestatair"}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                />
                <label htmlFor="prestatair" className="ml-2 text-sm text-gray-700">
                  Prestataire de services
                </label>
              </div>
            </div>
          </div>

          {error && <div className="text-red-600 text-sm text-center">{error}</div>}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
            // disabled={isLoading}
          >
            {/* {isLoading ? "Création du compte..." : "Créer mon compte"} */}
            Créer mon compte
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Déjà un compte ?{" "}
            <a 
                href="/login"
                className="text-pink-600 hover:text-pink-700 font-medium">
              Se connecter
            </a>
          </p>
        </div>

        <div className="mt-4 text-center">
          <a 
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}
