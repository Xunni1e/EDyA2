import React, { useEffect, useRef, useState } from 'react';
import './OverlayPerfilLoggin.css';
import { useNavigate, useParams } from 'react-router-dom';
import { doSignOut } from '../../firebase/auth';
import { useAuth } from '../../../context/authContext';
import { auth, db } from "../../firebase/firebase";
import { getDoc, doc } from 'firebase/firestore';

const OverlayPerfilLoggin = ({ isOpen, onClose, children, position, onLogout }) => {
    const navigate = useNavigate();
    const { ciudad } = useParams();

    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                    console.log(docSnap.data());
                } else {
                    console.log("Usuario no logueado");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleClickCompras = () => {
        navigate(`/${ciudad}/compras`);
    };

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
        navigate('/');
    };

    const overlayStyle = {
        top: position.top + 60,
        left: position.left - 280
    };

    return (
        <>
            {isOpen ? (
                <div className="perfil-container">
                    <div className="perfil-overlay" style={overlayStyle} ref={overlayRef} onClick={(event) => event.stopPropagation()}>
                        <div className="perfil-background" onClick={onClose} />
                        <div className='inicio-session-loggin'>
                            {userDetails ? (
                                <>
                                    <h2>{userDetails.firstName}</h2>
                                    <h2>{userDetails.lastName}</h2>
                                    <p>{userDetails.email}</p>
                                </>
                            ) : (
                                <p>Cargando datos del usuario...</p>
                            )}
                        </div>
                        <div className='principal-loggin'>
                            <button type="submit" className="btn" onClick={handleClickCompras}>Mis Compras</button>
                        </div>
                        <div className='principal-loggin'>
                            <button type="submit" className="btn" onClick={handleLogoutClick}>Cerrar Sesión</button>
                        </div>

                        {children}
                    </div>
                    <div className="overlay-backdrop" onClick={onClose} />
                </div>
            ) : null}
        </>
    );
};

export default OverlayPerfilLoggin;
