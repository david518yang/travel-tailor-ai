import React from 'react'
import { signOutUser } from '../utils/authService'
import { useNavigate } from 'react-router-dom'

export default function SignOutButton() {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOutUser()
      navigate('/')
    } catch (error) {
      console.error('Error during sign out', error)
    }
  }

  return (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-10" onClick={handleSignOut}>
      Sign Out
    </button>
  )
}
