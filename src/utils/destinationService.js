import { db, auth } from './firebase'
import {
  collection,
  query,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  orderBy,
  limit,
  Timestamp
} from 'firebase/firestore'

export async function saveDestination({ location, uuid }) {
  const { name, imageUrls, description, backgroundInfo } = location
  const userDocRef = doc(db, 'users', uuid)
  const data = {
    name,
    imageUrls,
    description,
    backgroundInfo,
    saveDate: Timestamp.now()
  }

  try {
    const userDoc = await getDoc(userDocRef)

    if (!userDoc.exists()) {
      await setDoc(userDocRef, { savedDestinations: [data] })
    } else {
      await updateDoc(userDocRef, {
        savedDestinations: arrayUnion(data)
      })
    }

    return data
  } catch (error) {
    console.error('Error creating article in Firestore:', error)
    throw error
  }
}
