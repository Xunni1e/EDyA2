import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, updateDoc, arrayUnion, setDoc, addDoc, collection } from "firebase/firestore";

    


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

export async function agregarCompra(uid, nuevaCompra) {
    try {
      // Obtenemos una referencia al documento del usuario utilizando su UID
      const userRef = doc(db, "Users", uid);
  
      // Actualizamos el subdocumento de "compras" del usuario agregando la nueva compra
      await updateDoc(userRef, {
        compras: arrayUnion(nuevaCompra)
      });
      
      console.log("Compra agregada correctamente a las compras del usuario");
    } catch (error) {
      console.error("Error al agregar la compra a las compras del usuario:", error);
    }
  }
  