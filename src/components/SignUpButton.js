import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../utils/authService'
import { db } from '../utils/firebase'
import { doc, getDoc } from 'firebase/firestore'

export default function SignUpButton() {
  const navigate = useNavigate()

  const handleSignUp = async () => {
    try {
      const { uuid, displayName } = await signInWithGoogle()
      const userDocRef = doc(db, 'users', uuid)
      const docSnapshot = await getDoc(userDocRef)
      if (docSnapshot.exists()) {
        alert('Account already registered, directing to homepage now.')
        navigate('/home', { state: { uuid, displayName } })
      } else {
        const pref = {}
        navigate('/preferences', { state: { uuid, pref } })
      }
    } catch (error) {
      console.error('Error during sign up', error)
    }
  }

  return (
    <button
      onClick={handleSignUp}
      className="bg-blue-500 hover:bg-blue-700 h-[6vh] flex lg:text-[2vh] md:text-[1vh] justify-center items-center text-white font-bold py-4 px-4 rounded my-[2vh]"
    >
      Sign Up
    </button>
  )
}
