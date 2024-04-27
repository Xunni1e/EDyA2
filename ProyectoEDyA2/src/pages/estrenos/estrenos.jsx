import React from 'react';
import PeliculaCard from '../../components/shared/PeliculaCard';
import './estrenos.css';

const peliculas = [
    { id: 1, imagen: '/img/estrenos/amigosimaginarios.jpg', titulo: 'Amigos Imaginarios', genero: 'Comedia, Drama, Familiar' },
    { id: 2, imagen: '/img/estrenos/avengers.jpg', titulo: 'Avengers: The Kang Dynasty', genero: 'Acción, Aventura, Ciencia ficción' },
    { id: 3, imagen: '/img/estrenos/backtoblack.jpg', titulo: 'Back To Black', genero: 'Biografía, Drama, Música' },
    { id: 4, imagen: '/img/estrenos/intensamente2.jpg', titulo: 'IntensaMente2', genero: 'Aventura, Animación, Comedia, Familia' },
    { id: 5, imagen: '/img/estrenos/ghostbusters.jpg', titulo: 'Ghostbusters: Apocalipsis Fantasma', genero: 'Comedia, Fantasía' },
    { id: 6, imagen: '/img/estrenos/damsel.jpg', titulo: 'Damsel', genero: 'Acción, Aventura, Fantasía' },
    { id: 7, imagen: '/img/estrenos/deadpool3.jpg', titulo: 'Deadpool 3', genero: 'Acción, Comedia' },
    { id: 8, imagen: '', titulo: 'Deadpool 3', genero: 'Acción, Comedia' },
  ];

const Estrenos = () => {    
    return (
        <div className="estrenos-container">
            <div className="estrenos-header">
                <h2 className="estrenos-titulo">
                    <span className="estrenos">PROXIMOS</span>
                    <span className="cali"> ESTRENOS</span>
                </h2>
                <div className="estrenos-linea"></div>
            </div>
            <div className="peliculas-grid">
                {peliculas.map(pelicula => (
                    <PeliculaCard 
                        key={pelicula.id}
                        imagen={pelicula.imagen}
                        titulo={pelicula.titulo}
                        genero={pelicula.genero}
                    />
                ))}
            </div>
        </div>
    );
}

export default Estrenos;