import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MetodoPago.css';

const MetodoPago = () => {
  const [metodoActivo, setMetodoActivo] = useState();

  const { id, ciudad } = useParams();
  const navigate = useNavigate();

  const seleccionarMetodo = (metodo) => {
    setMetodoActivo(metodo);
  };

  const handleNavigation = () => {
    if (metodoActivo) {
      navigate(`/${ciudad}/pelicula/${id}/pago-2`);
    }
  }
 
  return (
    <div className="metodo-pago-container">
      <div 
        className={`tarjeta-debito ${metodoActivo === 'debito' ? 'activo' : ''}`}
        onClick={() => seleccionarMetodo('debito')}
      >
        <p className='label-debito'>Tarjeta débito</p>
        <img src="/img/iconos/debito.png" alt="Logo PSE" className="logo-debito" />
      </div>
      <div 
        className={`tarjeta-credito ${metodoActivo === 'credito' ? 'activo' : ''}`}
        onClick={() => seleccionarMetodo('credito')}
      >
        <p className='label-credito'>Tarjeta crédito</p>
        <img src="/img/iconos/credito.png" alt="Logo Credito" className="logo-credito" />
      </div>
      <button 
        className='continuar-bttn-mtp' 
        onClick={handleNavigation}
        disabled={!metodoActivo}
      >
        Continuar
      </button>
    </div>
  );
};

export default MetodoPago;