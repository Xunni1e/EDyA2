import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Teatro.css';
import { useFuncion } from '../../context/useFuncionContext';
import { useAsientos } from '../../context/useAsientosContext';

const getWeekDays = (startFrom) => {
  let weekDays = [];
  for (let i = 0; i < 5; i++) {
    const futureDay = new Date(startFrom.getFullYear(), startFrom.getMonth(), startFrom.getDate() + i);
    weekDays.push({
      date: futureDay,
      shortName: futureDay.toLocaleString('es', { weekday: 'short' }),
      number: futureDay.getDate(),
      fullDate: futureDay.toISOString().split('T')[0],
      isToday: i === 0 && startFrom.setHours(0,0,0,0) === new Date().setHours(0,0,0,0)
    });
  }
  return weekDays;
};

const capitalizeFirstLetter = (input) => input.charAt(0).toUpperCase() + input.slice(1);

const Teatro = ({ funciones }) => {
  
  const navigate = useNavigate();
  const { ciudad, id } = useParams();
  const { setFullShowtime } = useFuncion();
  const { setPrecioBoleta } = useAsientos();
  const [startDate, setStartDate] = useState(new Date());
  const days = getWeekDays(startDate);
  const today = days.find(day => day.isToday);
  const [activeDay, setActiveDay] = useState(today);
  const [activeShowtime, setActiveShownTime] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const funcionesPorTeatro = funciones[ciudad] || {};

  const moveDate = (offset) => {
    const newStartDate = new Date(startDate.setDate(startDate.getDate() + offset));
    setStartDate(newStartDate);
  };

  const handleDayClick = (day) => {
    setActiveDay(day);
    setActiveShownTime(null);
  };

  const handleShowtimeClick = (funcion, formato) => {
    const dayName = capitalizeFirstLetter(activeDay.date.toLocaleString('es-ES', { weekday: 'long' }));
    const formattedDate = `${dayName} ${activeDay.date.toLocaleString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}`;
    const selectedShowtime = `${formattedDate}, ${funcion}`;

    setFullShowtime(selectedShowtime, formato);

    navigate(`/${ciudad}/pelicula/${id}/pago-1`, { state: { selectedShowtime, formato } });
    
    const precio = calcularPrecio(formato, activeDay.date);
    setPrecioBoleta(precio); 
  };

  const calcularPrecio = (formato, fecha) => {
    const dia = fecha.toLocaleString('es', { weekday: 'long' }).toLowerCase();
    if (formato.includes('2D')) {
      switch (dia) {
          case 'martes':
          case 'miércoles':
              return 6000;
          case 'lunes':
          case 'jueves':
          case 'viernes':
              return 8000;
          case 'sábado':
          case 'domingo':
              return 12000;
          default:
              return 8000;
      }
    } else if (formato.includes('3D')) {
        switch (dia) {
            case 'martes':
            case 'miércoles':
                return 7500;
            case 'lunes':
            case 'jueves':
            case 'viernes':
                return 9500;
            case 'sábado':
            case 'domingo':
                return 13500;
            default:
                return 9500;
        }
    }
    return 6000;
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="teatro-container">
      <div className="selector-dia">
        <button className="backDate" onClick={() => moveDate(-1)} disabled={new Date(startDate.toDateString()) <= new Date(new Date().toDateString())}>
          <img src="/img/iconos/atras.png" className='atras-img-date'/>
        </button>
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
        <button className="nextDate" onClick={() => moveDate(1)}>
          <img src="/img/iconos/siguiente.png" className='siguiente-img-date'/>
        </button>
      </div>
      {Object.entries(funcionesPorTeatro).map(([nombreTeatro, formatos]) => (
        <div key={nombreTeatro} className="teatro">
          <h3 className="teatro-nombre">{nombreTeatro}</h3>
          <button className='angulo' onClick={toggleDetails}>
            <img src={showDetails ? "/img/iconos/angulo-arriba.png" : "/img/iconos/angulo-abajo.png"} className='angulo-img' alt="Expandir"/>
          </button>
          {showDetails && (
            <div className="formato">
              {Object.entries(formatos).map(([formato, showtimes]) => (
                <div key={formato}>
                  <h3 className='dimension'>{formato} Doblado</h3>
                  <div className="funciones">
                    {showtimes.map((funcion, index) => (
                      <span key={index}
                            className={`funcion ${activeShowtime === funcion ? 'active' : ''}`}
                            onClick={() => handleShowtimeClick(funcion, formato + " - Doblado")}>
                        {funcion}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Teatro;