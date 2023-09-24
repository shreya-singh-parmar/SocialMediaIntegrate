import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();
export const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user);
            return result.user;

        }).catch((error) => {
            console.log(error.message);
         });
}
export const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookprovider)
        .then((result) => {
            console.log(result.user);
            return result.user;

        }).catch((error) => {
            console.log(error.message);
        })

}



