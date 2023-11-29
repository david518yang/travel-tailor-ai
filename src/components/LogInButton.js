import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../utils/authService'

export default function LogInButton() {
  const navigate = useNavigate()

  const handleLogIn = async () => {
    try {
      await signInWithGoogle()
      navigate('/home')
    } catch (error) {
      console.error('Error during log in', error)
      alert("The account hasn't been created yet. Please sign up.")
    }
  }

  return <button onClick={handleLogIn}>Log In</button>
}
