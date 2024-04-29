import React from 'react';
import './DetallesPelicula.css';

const DetallesPelicula = ({ sinopsis, protagonistas, director, idioma }) => {
  return (
    <div className="detalles-pelicula">
      <div className="sinopsis">
        <p>{sinopsis}</p>
      </div>
      <div className="protagonistas">
        <h2>Protagonistas</h2>
        <p>{protagonistas.join(", ")}</p>
      </div>
      <div className="director">
        <h2>Director</h2>
        <p>{director}</p>
      </div>
      <div className="idioma">
        <h2>Idioma</h2>
        <p>{idioma}</p>
      </div>
    </div>
  );
};

export default DetallesPelicula;
