
import React, { useEffect, useRef, useState} from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import { useAuth } from '../../../context/authContext';
import './OverlayPerfil.css'
import { set } from 'firebase/database';


const OverlayPerfil=({isOpen, onClose, children, position, onLogin})=>{


    const{userLogginIn} = useAuth()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isSigningIn,setIsSigningIn] = useState(false)
    const [mensajeError,setmMensajeError] = useState("")
    const overlayRef = useRef(null);
    

    const handleLogin = async (e) => {
        e.preventDefault()

        if(!email || !password){
            setmMensajeError("Porfavor rellenar todos los campos")
        }

        

        if(!isSigningIn){
            try{
                setIsSigningIn(true)
                await doSignInWithEmailAndPassword(email,password)
                onClose();
            }catch(error){
                alert(error.message)
            }
            
            
        }
        
        
    }

    const navigate = useNavigate();

    const { ciudad } = useParams();

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

    const handleRegisterClick = () => {
        navigate(`/${ciudad}/registro`);
    };

    const overlayStyle={
        top: position.top +60,
        left: position.left -280
    }



    return(
        <>
        {isOpen?(
            <div className="perfil-container">
                <div className="perfil-overlay" style={overlayStyle} ref={overlayRef} onClick={(event) => event.stopPropagation()}>
                <div className="overlay-background" onClick={onClose}/>
                <div className='inicio-session'>
                    <h2>Iniciar sesion</h2>
                </div>
                <form onSubmit={handleLogin}>
                    <div className='principal'>
                        <div className="form-group">
                            <p>Correo / Usuario</p>
                            <input type="email" id="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        </div>
                        <div className="form-group">
                            <p>Contraseña</p>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Contraseña'/>
                        </div>
                        <button type="submit" className="btn">Acceder</button>
                    </div>
                </form>
                <div className="forgot-password">
                        <a href="#">¿Olvidaste tu contraseña? Recupéralo aquí </a>
                </div>
                <div className='pie'>
                    <div className="register">
                        <a onClick={handleRegisterClick}>¿No estás registrado? Regístrate aquí</a> 
                    </div>
                </div>
                {mensajeError && <div className="error-message">{mensajeError}</div>}
                {children}
                </div>
                <div className="overlay-backdrop" onClick={onClose}/>
          </div>
        ):null}
        </>
    )
}

export default OverlayPerfil;