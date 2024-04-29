import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './DetallesPeliculaPago.css';

const DetallesPeliculaPago = ({ titulo, poster, formato, sala, clasificacionEdad, teatro, fechaHora }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const paso = useLocation().pathname.split('/').pop();
  const pasoNumero = parseInt(paso.split('-')[1]);

  const handleNavigation = (direction) => {
    if (direction === 'back') {
      if (pasoNumero === 1) {
        navigate(`/pelicula/${id}`);
      } else {
        navigate(`/pelicula/${id}/pago-${pasoNumero - 1}`);
      }
    } else {
      if (pasoNumero < 3) {
        navigate(`/pelicula/${id}/pago-${pasoNumero + 1}`);
      }
    }
  };

  const tituloPagina = pasoNumero === 1 ? 'ESCOGER MEDIO DE PAGO' : pasoNumero === 2 ? 'CANTIDAD DE ASIENTOS' : 'ESCOGER UBICACIÓN';

  return (
    <div className="detalles-pelicula-pago">
      <div className="pelicula-header">
        <img src={poster} alt={`Póster de ${titulo}`} className="poster-pago"/>
        <div className="info-pelicula-pago">
          <h1 className="titulo-pelicula-pago">{titulo}</h1>
          <p>{clasificacionEdad}</p>
          <p>{fechaHora}</p>
          <p>{formato}</p>
          <p>{teatro}</p>
          <p>{sala}</p>
        </div>
      </div>
      <div className="navegacion-pago">
        {pasoNumero > 0 && (
          <button className='atras-bttn' onClick={() => handleNavigation('back')}>
            <img src="/img/iconos/atras.png" className="atras-img"/>
          </button>
        )}
        <div>
          <h2 className='titulo-pag'>{tituloPagina}</h2>
          <span className='pasos'>{`${pasoNumero} de 3`}</span>
        </div>
        {pasoNumero < 3 && (
          <button className='continuar-bttn' onClick={() => handleNavigation('forward')}>Continuar</button>
        )}
      </div>
    </div>
  );
};

export default DetallesPeliculaPago;
