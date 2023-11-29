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

  return <button onClick={handleSignOut}>Sign Out</button>
}
