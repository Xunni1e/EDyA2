import React from 'react';
import './PeliculaCard.css'; // El archivo CSS para este componente

const PeliculaCard = ({ imagen, titulo, genero, onClick }) => {
    return (
        <div className="pelicula-card">
            <div className="pelicula-imagen-container">
                <img src={imagen} alt='Imagen de la película' className="pelicula-imagen"  onClick={onClick} />
            </div>
            <div className="pelicula-info">
                <h3 className="pelicula-titulo">{titulo}</h3>
                <p className="pelicula-genero">{genero}</p>
            </div>
        </div>
    );
};

export default PeliculaCard;