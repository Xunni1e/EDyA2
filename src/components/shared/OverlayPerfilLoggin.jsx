
import React, { useEffect, useRef, useState} from 'react';
import './OverlayPerfilLoggin.css'
import { useNavigate, useParams } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';
import { useAuth } from '../../../context/authContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUserData } from '../../firebase/auth';
import firebase from 'firebase/compat/app';
import { db,auth } from "../../firebase/firebase";
import { getDoc, doc } from 'firebase/firestore';
const OverlayPerfilLoggin=({isOpen, onClose, children, position, onLogout})=>{

    const navigate = useNavigate();

    const { ciudad } = useParams();

    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
            setUser(currentUser);

        // Obtener datos adicionales del usuario desde Firestore
        const userDoc = await getDoc(doc(db, "Users", currentUser.uid));
            if (userDoc.exists()) {
            setUserInfo(userDoc.data());
        }
        } else {
            setUser(null);
        }
        });
        console.log(userInfo.firstName)
        console.log(userInfo.lastName)
    return () => unsubscribe();
    }, []);
    

    const handleClickCompras = () => {
        navigate(`/${ciudad}/compras`);
    }
    const {userLoggedIn} = useAuth()
    const overlayRef = useRef(null);

       
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                    onClose();
                }
            };

            
            document.addEventListener("mousedown", handleClickOutside);

         
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [onClose]);

        const handleLogoutClick = () => {
            doSignOut();
            onClose(); 
        };

    const overlayStyle={
        top: position.top +60,
        left: position.left-280
    }



    return(
        <>
        {isOpen?(
            <div className="perfil-container">
                <div className="perfil-overlay" style={overlayStyle} ref={overlayRef} onClick={(event) => event.stopPropagation()}>
                    <div className="perfil-background" onClick={onClose}/>
                    <div className='inicio-session-loggin'>
                        <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                        <p>{user.email}</p>
                    </div>
                    <div className='principal-loggin'>
                        <button type="submit" className="btn" onClick={handleClickCompras}>Mis Compras</button>
                    </div>
                    <div className='principal-loggin'>
                        <button type="submit" className="btn" onClick={handleLogoutClick}>Cerrar Sesion</button>
                    </div>

                {children}
                </div>
                <div className="overlay-backdrop" onClick={onClose}/>
          </div>
        ):null}
        </>
    )
}

export default  OverlayPerfilLoggin;