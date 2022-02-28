import { firebaseConfig } from "../../firebase_/firebase_conf"
import { initializeApp } from 'firebase/app'

export const authReducer = () => {
    return initializeApp(firebaseConfig)
}