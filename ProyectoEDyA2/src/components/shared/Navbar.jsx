import React,{useEffect, useState} from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

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
            <div class="contenedor-botones-sec">
                <div class="contenedor-ciudad-icono">
                    <div class="ciudad-container">Ciudad</div>
                    <div class="icon-1">
                        <img src="/img/iconos/marcador.png" alt="Imagen" />
                    </div>
                </div>
                <div class="icon-2">
                    <img src="/img/iconos/usuario.png" alt="Imagen" />
                </div>
            </div>
        </header>
    )
}

export default Navbar;