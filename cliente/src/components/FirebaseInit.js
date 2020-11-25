import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import FirebaseConfig from './FirebaseConfig'
const firebaseAppInit = firebase.initializeApp(FirebaseConfig)
export default firebaseAppInit.firestore()
export const dbAuth = firebase.auth()
const { Timestamp, GeoPoint } = firebase.firestore
export {Timestamp, GeoPoint}