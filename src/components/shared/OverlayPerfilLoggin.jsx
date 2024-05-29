
import React, { useEffect, useRef} from 'react';
import './OverlayPerfilLoggin.css'
import { useNavigate, useParams } from 'react-router-dom';


const OverlayPerfilLoggin=({isOpen, onClose, children, position, onLogout})=>{

    const navigate = useNavigate();

    const { ciudad } = useParams();

    const handleClickCompras = () => {
        navigate(`/${ciudad}/compras`);
    }

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
            onLogout(); 
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
                        <h2>Nombre Apellido</h2>
                        <p>Correo</p>
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