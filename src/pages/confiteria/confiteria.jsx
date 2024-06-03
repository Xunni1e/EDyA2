import React, { useEffect } from 'react';
import Navbar from "../../components/shared/Navbar";
import './confiteria.css';


const productos = [
    { id: 1, imagen: '/img/confiteria/Crispetas.png', nombre: 'CRISPETAS GRANDES', precio: '$8000' },
    { id: 2, imagen: '/img/confiteria/Crispetas.png', nombre: 'CRISPETAS MEDIANAS', precio: '$6500' },
    { id: 3, imagen: '/img/confiteria/gaseosa.png', nombre: 'GASEOSA PEQUEÑA', precio: '$4000'},
    { id: 4, imagen: '/img/confiteria/gaseosa.png', nombre: 'GASEOSA MEDIANA', precio: '$5500' },
    { id: 5, imagen: '/img/confiteria/gaseosa.png', nombre: 'GASEOSA GRANDE', precio: '7000' },
    { id: 6, imagen: '/img/confiteria/agua.png', nombre: 'AGUA PET', precio: '$3000' },
    { id: 7, imagen: '/img/confiteria/nachos.png', nombre: 'NACHOS', precio: '$6000' }
  ];

const Confiteria = () => { 

    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return(
        <div className="confiteria-container">
            <Navbar/>
            <div className="confiteria-header">
                <h2 className="confiteria-titulo">
                    <span className="confiteria">CONFITERIA</span>
                </h2>
                <div className="confiteria-linea"></div>
            </div>
            <div className="confiteria-grid">
            {productos.map(producto => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt='Imagen del producto' className="producto-imagen" />
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p className="producto-precio">{producto.precio}</p>
          </div>
        ))}
            </div>
        </div>
    )
}

export default Confiteria;
