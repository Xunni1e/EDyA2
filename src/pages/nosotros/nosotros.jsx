import React, { useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard.jsx';
import Navbar from '../../components/shared/Navbar.jsx';
import './nosotros.css';

const Nosotros = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="nosotros-container">
            <Navbar/>
            <div className="nosotros-header">
                <h2 className="nosotros-titulo">
                    <span className="sobre">SOBRE</span>
                    <span className="nosotros"> NOSOTROS</span>
                </h2>
                <div className="nosotros-linea"></div>
            </div>
            <div className="profile-grid">
                <ProfileCard
                    image="/img/nosotros/Alex.jpg"
                    name="Alex Andrey Guzmán"
                    role="Desarrollador Frontend"
                />
                <ProfileCard 
                    image="/img/nosotros/Alfonso.jpg"
                    name="Alfonso Miguel Hernández"
                    role="Diseñador y Desarrollador Frontend"
                />
                <ProfileCard 
                    image="/img/nosotros/Sebastian.jpg"
                    name="Juan Sebastian Valderrama"
                    role="Desarrollador Frontend"
                />
            </div>
        </div>
    );
}

export default Nosotros;
