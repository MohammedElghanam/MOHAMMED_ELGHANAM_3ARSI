
import { useState } from "react"

import { Heart, Mail, Lock } from "lucide-react"
import useLogin from "../hooks/useLogin"


export function LoginPage() {
  
    const {
        email,
      setEmail,
      password,
      setPassword,
      errors,
      errorPopup,
      isLoading,
      handleSubmit,
    } = useLogin();


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-8 w-8 text-pink-600" />
            <span className="text-2xl font-bold text-gray-900">3ARSI_BI_CLICK</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Connexion</h1>
          <p className="text-gray-600">Connectez-vous à votre compte pour accéder à votre espace personnel</p>
        </header>

        <form 
            onSubmit={handleSubmit}  
            className="space-y-6">
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
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
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
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Pas encore de compte ?{" "}
            <a 
                href="/register"
                className="text-pink-600 hover:text-pink-700 font-medium">
              Créer un compte
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
        {errorPopup && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {errorPopup}
          </div>
        )}
      </div>
    </div>
  )
}
