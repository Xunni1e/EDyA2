import React,{useEffect, useRef, useState} from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import OverlayCiudad from "./OverlayCiudad"
import OverlayPerfil from "./OverlayPerfil"
import OverlayPerfilLoggin from "./OverlayPerfilLoggin"
const links =[
    {
        link:"/",
        text: "Cartelera",
        id:1

    },
    {
        link:"/estrenos",
        text: "Estrenos",
        id:2

    },
    {
        link:"/confiteria",
        text: "Confiteria",
        id:3

    }
]

const Navbar =()=>{

    const [isCiudadOverlayOpen, setCiudadOverlayOpen] = useState(false);
    const [isPerfilOverlayOpen, setPerfilOverlayOpen] = useState(false);
    const [isPerfilLogginOverlayOpen, setPerfilLogginOverlayOpen] = useState(false);
    const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [text, setText] = useState("Ciudad")
    const ciudades=["Armenia","Ibague","Barranquilla","Manizales","Bogota","Medellin","Cali","Pereira","Cucuta","Popayan","Pasto","Cartagena"]
    
    

    const handleLogin = () => {
        setIsLoggedIn(true);
      };
    
      const handleLogout = () => {
        setIsLoggedIn(false);
      };


    const changeCity =(ciudad)=>{
        setText(ciudad);
    }

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
                <h1 className="logo">CINEWAO</h1>
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
                <div className="icon-2">
                    <button className="location-button-profile" onClick={(event) => {handleButtonClick, setPerfilOverlayOpen(!isPerfilOverlayOpen),setPerfilLogginOverlayOpen(!isPerfilLogginOverlayOpen) ; }} >
                        <img src="/img/iconos/usuario.png" alt="Imagen" />
                    </button>

                    {!isLoggedIn && overlayPosition && <OverlayPerfil position={overlayPosition} isOpen={isPerfilOverlayOpen}
                        onClose={()=>setPerfilOverlayOpen(!isPerfilOverlayOpen)} onLogin={handleLogin}/>}
                        
                    {isLoggedIn && overlayPosition && <OverlayPerfilLoggin position={overlayPosition} isOpen={isPerfilLogginOverlayOpen}
                        onClose={()=>setPerfilLogginOverlayOpen(!isPerfilLogginOverlayOpen)} onLogout={handleLogout} />}
                </div>
            </div>
        </header>
    )
}

export default Navbar;