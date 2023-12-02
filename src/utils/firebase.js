// import firebase from 'firebase/app';
// import 'firebase/auth';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBjjfcFoDmasxbsgU5YDVS0qcjiVKWyNbE',
  authDomain: 'webappfinal-27f0d.firebaseapp.com',
  projectId: 'webappfinal-27f0d',
  storageBucket: 'webappfinal-27f0d.appspot.com',
  messagingSenderId: '328678408697',
  appId: '1:328678408697:web:946d0930e37d5955ec7d28'
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
