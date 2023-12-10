import { db } from './firebase'
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, Timestamp } from 'firebase/firestore'

export async function saveDestination({ location, uuid }) {
  const { name, imageUrls, description, backgroundInfo, notableAttractions } = location
  const userDocRef = doc(db, 'users', uuid)
  const data = {
    name,
    imageUrls,
    description,
    backgroundInfo,
    notableAttractions,
    saveDate: Timestamp.now()
  }

  try {
    const userDoc = await getDoc(userDocRef)

    if (userDoc.exists()) {
      await updateDoc(userDocRef, {
        savedDestinations: arrayUnion(data)
      })
    } else {
      await setDoc(userDocRef, { preferences: userDoc.data().preferences, savedDestinations: [data] })
    }

    return data
  } catch (error) {
    console.error('Error creating article in Firestore:', error)
    throw error
  }
}

export async function unsaveDestination({ location, uuid }) {
  try {
    const userDocRef = doc(db, 'users', uuid)
    const userDoc = await getDoc(userDocRef)
    if (userDoc.exists()) {
      await updateDoc(userDocRef, {
        savedDestinations: arrayRemove(location)
      })
    } else {
      throw new Error('User not found')
    }
  } catch (error) {
    console.error('Error deleting destination in Firestore:', error)
    throw error
  }
}

export async function fetchDestinations(uuid, amount) {
  try {
    const userDocRef = doc(db, 'users', uuid)
    const docSnapshot = await getDoc(userDocRef)

    if (!docSnapshot.exists()) {
      throw new Error('User not found')
    }

    let userDestinations = docSnapshot.data().savedDestinations || []

    // Sort destinations by saveDate
    userDestinations.sort((a, b) => {
      const dateA = a.saveDate ? new Date(a.saveDate.seconds * 1000) : new Date(0)
      const dateB = b.saveDate ? new Date(b.saveDate.seconds * 1000) : new Date(0)
      return dateB.getTime() - dateA.getTime()
    })

    // Slice the array based on the 'amount'
    if (amount === 'top3') {
      return userDestinations.slice(0, 3)
    } else if (amount === 'all') {
      return userDestinations.slice(0, 30)
    } else {
      throw new Error("Invalid amount. Must be 'top3' or 'all'.")
    }
  } catch (error) {
    console.error('Error fetching destinations:', error)
    throw error
  }
}
