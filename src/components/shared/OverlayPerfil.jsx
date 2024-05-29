
import React, { useEffect, useRef} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './OverlayPerfil.css'

const OverlayPerfil=({isOpen, onClose, children, position, onLogin})=>{

    const overlayRef = useRef(null);

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

    const handleLoginClick = () => {
        onLogin();
        onClose();
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
                <form>
                    <div className='principal'>
                        <div className="form-group">
                            <p>Correo / Usuario</p>
                            <input type="text" id="username" />
                        </div>
                        <div className="form-group">
                            <p>Contraseña</p>
                            <input type="password" id="password" />
                        </div>
                        <button type="submit" className="btn" onClick={handleLoginClick}>Acceder</button>
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
                
                {children}
                </div>
                <div className="overlay-backdrop" onClick={onClose}/>
          </div>
        ):null}
        </>
    )
}

export default OverlayPerfil;