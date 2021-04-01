import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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
