import React from 'react'
import useLogout from '../hooks/useLogout'

export default function DashboardNav() {

    const logout = useLogout();
  return (
    <>
        <div className=" flex justify-end items-end w-full px-6 py-4">
            <button 
                onClick={logout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>
        </div>
    </>
  )
}
