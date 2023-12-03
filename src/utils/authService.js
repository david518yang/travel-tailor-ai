import { useState, useEffect } from 'react'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { doc, setDoc, collection } from 'firebase/firestore'
import { db, auth } from './firebase'

const handleNewSignIn = async uuid => {
  const userDocRef = doc(db, 'users', uuid)
  const userSubcollectionRef = collection(userDocRef, uuid)
  const initialDocRef = doc(userSubcollectionRef)
  await setDoc(initialDocRef, {})
}

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    const uuid = result.user.uid
    await handleNewSignIn(uuid)
    const displayName = result.user.displayName
    return { uuid, displayName }
  } catch (error) {
    console.error('Error signing in with Google', error)
    throw error
  }
}

export const signOutUser = async () => {
  try {
    await signOut(auth) // Firebase sign out
    console.log('User signed out successfully')
  } catch (error) {
    console.error('Error signing out: ', error)
    throw error
  }
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}
