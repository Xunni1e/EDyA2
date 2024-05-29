import React from 'react';
import { useAsientos } from '../../context/useAsientosContext';
import './CantidadAsientos.css';

const CantidadAsientos = () => {
  const { cantidad, incrementarCantidad, decrementarCantidad, total } = useAsientos();

  return (
    <div className="cantidad-asientos-container">
      <div className="cantidad-asientos-controladores">
        <button className="menos-bttn" onClick={decrementarCantidad} disabled={cantidad <= 1}>
          <img src={"/img/iconos/menos.png"} className='menos-img' alt="restar"/>
        </button>
        <span className="cantidad-asientos">{cantidad}</span>
        <button className="mas-bttn" onClick={incrementarCantidad} disabled={cantidad >= 8}>
          <img src={"/img/iconos/mas.png"} className='mas-img' alt="sumar"/>
        </button>
      </div>
      <div className="cantidad-asientos-total">
        <span>Total a pagar:</span>
        <span className="total-precio">${total.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default CantidadAsientos;
