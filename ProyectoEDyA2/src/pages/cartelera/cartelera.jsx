import React from 'react';
import PeliculaCard from '../../components/shared/PeliculaCard';
import './cartelera.css'; // Asegúrate de que tienes un CSS que maneje el layout
import Carrusel from '../../components/Carrusel.jsx';

// Aquí usamos un arreglo estático para fines de demostración.
// En una aplicación real, podrías obtener este arreglo desde una API o tu estado de React.
const peliculas = [
    { id: 1, imagen: '/img/cartelera/alerta_roja.jpg', titulo: 'Alerta Roja', genero: 'Accción, Comedia' },
    { id: 2, imagen: '/img/cartelera/black_panther.jpg', titulo: 'Black Panther 2: Wakanda Forever', genero: 'Acción, Aventura, Ciencia ficción' },
    { id: 3, imagen: '/img/cartelera/avatar.jpg', titulo: 'Avatar: El camino del agua', genero: 'Aventura, Acción, Ciencia ficción' },
    { id: 4, imagen: '/img/cartelera/cruella.jpg', titulo: 'Cruella', genero: 'Drama, Comedia, Crimen' },
    { id: 5, imagen: '/img/cartelera/dune.jpg', titulo: 'Dune: Parte Dos', genero: 'Acción, Aventura, Drama' },
    { id: 6, imagen: '/img/cartelera/d&d.jpg', titulo: 'Dungeons & Dragones: Honor entre ladrones', genero: 'Aventura, Fantasía' },
    { id: 7, imagen: '/img/cartelera/civil_war.jpg', titulo: 'Civil War', genero: 'Acción' },

    // ... más películas
  ];

const Cartelera = () => {

    const imagenesCarrusel = peliculas.map(pelicula => pelicula.imagen);
    
    return (
        <div className="cartelera-container">
            <Carrusel imagenes={imagenesCarrusel} />

            <div className="cartelera-header">
                <h2 className="cartelera-titulo">
                    <span className="cartelera">CARTELERA</span>
                    <span className="cali"> CALI</span>
                </h2>
                <div className="cartelera-linea"></div>
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

export default Cartelera;