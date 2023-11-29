import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../utils/authService'

export default function SignUpButton() {
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      await signInWithGoogle()
      navigate('/preferences')
    } catch (error) {
      console.error('Error during sign up', error)
    }
  }

  return (
    <button onClick={handleSignUp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Sign Up
    </button>
  )
}
