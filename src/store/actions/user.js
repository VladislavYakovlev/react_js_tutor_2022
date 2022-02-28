import { store } from "../";
import { signInWithPopup,  GoogleAuthProvider, getAuth} from 'firebase/auth'


// const {auth} = store.getState()
const provider = new GoogleAuthProvider()  

export const authGoogle = async(dispatch) => {
    // try {
        const auth = getAuth();
        const user = await signInWithPopup(auth, provider)
        if( user ){
            dispatch({type:'user_loggined', payload: user.user, loggined: true})
        }
        
    // } catch (error) {
    //     return {message:'error'}
    // }
    
}