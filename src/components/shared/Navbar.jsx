import React,{useEffect, useRef, useState} from "react"
import { Link } from "react-router-dom"
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import "./Navbar.css"
import OverlayCiudad from "./OverlayCiudad"
import OverlayPerfil from "./OverlayPerfil"
import OverlayPerfilLoggin from "./OverlayPerfilLoggin"
import { useAuth } from "../../../context/authContext";
const Navbar =()=>{
    const [isCiudadOverlayOpen, setCiudadOverlayOpen] = useState(false);
    const [isPerfilOverlayOpen, setPerfilOverlayOpen] = useState(false);
    const [isPerfilLogginOverlayOpen, setPerfilLogginOverlayOpen] = useState(false);
    const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { ciudad } = useParams();
    const [text, setText] = useState(ciudad)
    const {currentUser} = useAuth();
    const links =[
        {
            link:`/${ciudad}`,
            text: "Cartelera",
            id:1
    
        },
        {
            link:`/${ciudad}/estrenos`,
            text: "Estrenos",
            id:2
    
        },
        {
            link:`/${ciudad}/confiteria`,
            text: "Confiteria",
            id:3
    
        },
        {
            link:`/${ciudad}/nosotros`,
            text: "Nosotros",
            id:4
    
        }
    ]
    
    const ciudades = [
        "Armenia",
        "Barranquilla",
        "Bogotá",
        "Cali",
        "Cartagena",
        "Cúcuta",
        "Ibagué",
        "Manizales",
        "Medellín",
        "Pasto",
        "Pereira",
        "Popayán"
    ]

    const navigate = useNavigate();
    const location = useLocation();

    const handleClickLogo = () => {
        navigate(`/${ciudad}`);
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
      };
    
      const handleLogout = () => {
        setIsLoggedIn(false);
      };


      const changeCity = (ciudad) => {
        setText(ciudad.replace(/[\u0300-\u036f]/g, ""));

        const pathSegments = location.pathname.split('/');
        if (pathSegments.length > 1 && pathSegments[1]) {
            pathSegments[1] = ciudad.replace(/[\u0300-\u036f]/g, "");
        }
        
        navigate(pathSegments.join('/'));
    };

    const handleButtonClick = (event, overlayType) => {
        const buttonRect = event.target.getBoundingClientRect();
        setOverlayPosition({
            top: buttonRect.bottom,
            left: buttonRect.left,
            height: buttonRect.height,
    });
        
        

        if (overlayType === "ciudad") {
            setCiudadOverlayOpen(!isCiudadOverlayOpen);
            setPerfilOverlayOpen(false); 
          } else if (overlayType === "perfil") {
            setPerfilOverlayOpen(!isPerfilOverlayOpen);
            setCiudadOverlayOpen(false); 
          }
        };
   
    return(
        <header className="barra-navegacion"> 
            <div className="contenedor-logo">
                <h1 className="logo" onClick={handleClickLogo}>CINEWAO</h1>
            </div>
            
            <div className="contenedor-botones-pr">
                {links.map(l=>(
                    <button className="botones"  key={l.id}>
                        <Link to={l.link} className="link-botones">{l.text}</Link>
                    </button>
                    
                ))
                }
            </div>
            <div className="contenedor-botones-sec">
                <div className="contenedor-ciudad-icono">

                    <div className="icon-1">
                        <button className="location-button" onClick={(event) => {handleButtonClick, setCiudadOverlayOpen(!isCiudadOverlayOpen); }}>   
                            <span className="ciudad-container">{text}</span>
                            <img src="/img/iconos/marcador.png" alt="Imagen" />
                        </button>
                        {overlayPosition && <OverlayCiudad position={overlayPosition} isOpen={isCiudadOverlayOpen} ciudad={ciudades} changeCity={changeCity}
                        onClose={()=>setCiudadOverlayOpen(!isCiudadOverlayOpen)}/>}
                    </div>
                </div>
                <div className="icon-2" onClick={(event) => {handleButtonClick, setPerfilOverlayOpen(!isPerfilOverlayOpen),setPerfilLogginOverlayOpen(!isPerfilLogginOverlayOpen) ; }} >
                    <button className="location-button-profile">
                        <img src="/img/iconos/usuario.png" alt="Imagen" />
                    </button>

                    {!currentUser && overlayPosition && <OverlayPerfil position={overlayPosition} isOpen={isPerfilOverlayOpen}
                        onClose={()=>setPerfilOverlayOpen(!isPerfilOverlayOpen)} onLogin={handleLogin}/>}
                        
                    {currentUser && overlayPosition && <OverlayPerfilLoggin position={overlayPosition} isOpen={isPerfilLogginOverlayOpen}
                        onClose={()=>setPerfilLogginOverlayOpen(!isPerfilLogginOverlayOpen)} onLogout={handleLogout} />}
                </div>
            </div>
        </header>
    )
}

export default Navbar;