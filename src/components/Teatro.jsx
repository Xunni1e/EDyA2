import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Teatro.css';
import { useFuncion } from '../hooks/useFuncion';

const getWeekDays = () => {
  const today = new Date();
  let weekDays = [];
  for (let i = 0; i < 5; i++) {
    const futureDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
    weekDays.push({
      date: futureDay,
      shortName: futureDay.toLocaleString('es', { weekday: 'short' }),
      number: futureDay.getDate(),
      fullDate: futureDay.toISOString().split('T')[0],
      isToday: i === 0
    });
  }
  return weekDays;
};

const capitalizeFirstLetter = (input) => input.charAt(0).toUpperCase() + input.slice(1);

const Teatro = ({ funciones }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setSelectedShowtime } = useFuncion();
  const days = getWeekDays();
  const today = days.find(day => day.isToday);
  const [activeDay, setActiveDay] = useState(today);
  const [activeShowtime, setActiveShowtime] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const showtimesUnicentro = funciones && funciones['unicentro'];

  const handleDayClick = (day) => {
    setActiveDay(day);
    setActiveShowtime(null);
  };

  const handleShowtimeClick = (funcion) => {
    const dayName = capitalizeFirstLetter(activeDay.date.toLocaleString('es-ES', { weekday: 'long' }));
    const formattedDate = `${dayName} ${activeDay.date.toLocaleString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}`;
    const selectedShowtime = `${formattedDate}, ${funcion}`;
    setSelectedShowtime(selectedShowtime);
    navigate(`/pelicula/${id}/pago-1`, { state: { selectedShowtime } });
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="teatro-container">
       <div className="selector-dia">
        {days.map(day => (
          <button
            key={day.number}
            className={`dia-boton ${activeDay.fullDate === day.fullDate ? 'active' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            <span className="num">{day.number}</span><br/>
            <span className="dia">{day.shortName.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <div className="teatros">
        <div className="teatro">
          <div className='teatro-titulo'> FUNCIONES POR TEATRO</div>
          <div className="teatro-nombre">Unicentro</div>
          <button className='angulo' onClick={toggleDetails}>
            <img src={showDetails ? "/img/iconos/angulo-arriba.png" : "/img/iconos/angulo-abajo.png"} className='angulo-img' alt="Expandir"/>
          </button>
          {showDetails && (
            <div className="formato"> 2D Doblado
              <div className="funciones">
                {showtimesUnicentro ? showtimesUnicentro.map(funcion => (
                  <span key={funcion}
                        className={`funcion ${activeShowtime === funcion ? 'active' : ''}`}
                        onClick={() => handleShowtimeClick(funcion)}>
                    {funcion}
                  </span>
                )) : <p>No hay funciones disponibles.</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teatro;