import { db } from './firebase'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

export async function savePreferences({ preferences, uuid }) {
  const userDocRef = doc(db, 'users', uuid)
  try {
    const userDoc = await getDoc(userDocRef)
    if (!userDoc.exists()) {
      await setDoc(userDocRef, { preferences: preferences })
    } else {
      await updateDoc(userDocRef, { preferences: preferences })
    }
  } catch (error) {
    console.error('Error setting preferences in Firestore:', error)
    throw error
  }
}

export async function fetchPreferences(uuid) {
  try {
    const userDocRef = doc(db, 'users', uuid)
    const docSnapshot = await getDoc(userDocRef)

    if (!docSnapshot.exists()) {
      throw new Error('User not found')
    }

    let userPreferences = docSnapshot.data().preferences
    return userPreferences
  } catch (error) {
    console.error('Error fetching preferences:', error)
    throw error
  }
}
