import React from 'react';
import './PeliculaHeader.css';

const PeliculaHeader = ({ titulo, fechaEstreno, genero, clasificacionEdad, duracion, poster, imagenFondo, trailerUrl }) => {

  const handlePlayButtonClick = () => {
    window.open(trailerUrl, "_blank");
  };

  return (
    <div className="header">
      <div className="pelicula-header">
        <div className="sombra"/>
        <img src={imagenFondo} className='fondo-der-bordes'/>
        <img src={imagenFondo} className='fondo-izq-bordes'/>
        <img src={imagenFondo} alt={`Fondo de ${titulo}`} className='imagen-fondo'/>
        <img src={poster} alt={`Póster de ${titulo}`} className="poster" />
        <button className="play-button" onClick={handlePlayButtonClick}>
          <img src="/img/iconos/iniciar.png" className='inciar-img'></img>
        </button>
        <div className="info">
          <h1 className="titulo">{titulo}</h1>
          <p className="fecha-estreno">{fechaEstreno}</p>
          <p className="genero">{genero}</p>
          <p className="edad-recomendada">{clasificacionEdad}</p>
          <p className="duracion">{duracion}</p>
        </div>
      </div>
    </div>
  );
};

export default PeliculaHeader;
