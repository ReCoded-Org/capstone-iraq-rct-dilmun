import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDHXQokeUHbuSfe7eqc118szENnhPknzA8',
  authDomain: 'dilmun-77e8d.firebaseapp.com',
  projectId: 'dilmun-77e8d',
  storageBucket: 'dilmun-77e8d.appspot.com',
  messagingSenderId: '24719333529',
  appId: '1:24719333529:web:c93d101fa537de0b1ec008',
  measurementId: 'G-VBS8TJ0SXC',
}

firebase.initializeApp(firebaseConfig)
export default firebase
const db = firebase.firestore()
const storage = firebase.storage()
const storageRef = firebase.storage().ref()
const increament = firebase.firestore.FieldValue.increment(1)
export { db }
export { storageRef }
export { storage }
export { increament }
