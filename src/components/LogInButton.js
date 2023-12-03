import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../utils/authService'
import { db } from '../utils/firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function LogInButton() {
  const navigate = useNavigate()

  const handleLogIn = async () => {
    try {
      const { uuid, displayName } = await signInWithGoogle()
      const userDocRef = doc(db, 'users', uuid)
      const docSnapshot = await getDoc(userDocRef)
      if (!docSnapshot.exists()) {
        alert("Account hasn't been registered yet, please sign up first.")
      } else {
        navigate('/home', { state: { uuid, displayName } })
      }
    } catch (error) {
      console.error('Error during log in', error)
      alert("The account hasn't been created yet. Please sign up.")
    }
  }

  return (
    <button
      onClick={handleLogIn}
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded m-10"
    >
      Log In
    </button>
  )
}
