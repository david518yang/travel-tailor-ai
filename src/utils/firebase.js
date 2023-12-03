// import firebase from 'firebase/app';
// import 'firebase/auth';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDxD-zsVzn5dNZ9u7oRa1iuj2KAvIinAtk',
  authDomain: 'travel-tailor-ai.firebaseapp.com',
  projectId: 'travel-tailor-ai',
  storageBucket: 'travel-tailor-ai.appspot.com',
  messagingSenderId: '1014478420131',
  appId: '1:1014478420131:web:4efba979a6d7e2ad8fa716'
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
