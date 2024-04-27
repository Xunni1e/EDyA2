import React from 'react';
import './PeliculaCard.css'; // El archivo CSS para este componente

// Este componente acepta props para la imagen, título y género de la película
const PeliculaCard = ({ imagen, titulo, genero }) => {
    return (
    <div className="pelicula-card">
        <div className="pelicula-imagen-container">
        <img src={imagen} alt='/img/iconos/mas.png' className="pelicula-imagen" />
        </div>
        <div className="pelicula-info">
        <h3 className="pelicula-titulo">{titulo}</h3>
        <p className="pelicula-genero">{genero}</p>
        </div>
    </div>
    );
};

export default PeliculaCard;