import React, { useState } from 'react';
import './MetodoPago.css';

const MetodoPago = () => {
  const [metodoActivo, setMetodoActivo] = useState();

  const seleccionarMetodo = (metodo) => {
    setMetodoActivo(metodo);
  };

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
    </div>
  );
};

export default MetodoPago;