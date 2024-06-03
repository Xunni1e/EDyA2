import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";

    


export const doSignInWithEmailAndPassword = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignOut = ()=>{
    return auth.signOut();
}

export const getUserData = async (uid) => {
    try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            console.error("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting document:", error);
        throw error;
    }
}