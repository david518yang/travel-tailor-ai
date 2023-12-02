import { db, auth } from './firebase'
import {
  collection,
  query,
  doc,
  getDoc,
  getDocs,
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

    // const usersQuery = query(collection(db, 'users'), limit(30))
    // const querySnapshot = await getDocs(usersQuery)

    // let destinations = []
    // querySnapshot.forEach(doc => {
    //   const userDestinations = doc.data().savedDestinations || []
    //   destinations = destinations.concat(userDestinations)
    // })

    // destinations.sort((a, b) => {
    //   const dateA = a.saveDate ? new Date(a.saveDate.seconds * 1000) : new Date(0)
    //   const dateB = b.saveDate ? new Date(b.saveDate.seconds * 1000) : new Date(0)
    //   return dateB.getTime() - dateA.getTime()
    // })

    // if (amount === 'top3') {
    //   return destinations.slice(0, 3)
    // } else if (amount === 'all') {
    //   return destinations.slice(0, 30)
    // } else {
    //   throw new Error("Invalid amount. Must be 'top3' or 'all'.")
    // }
  } catch (error) {
    console.error('Error fetching destinations:', error)
    throw error
  }
}
