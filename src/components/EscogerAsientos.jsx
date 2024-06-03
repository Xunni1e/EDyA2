import React, { useState } from 'react';
import { useAsientos } from '../../context/useAsientosContext';
import './EscogerAsientos.css';

const filas = ['A', 'B', 'C', 'D', 'E', 'F'];
const asientosPorFila = 10;

const asientosOcupados = new Set([
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
    'D1', 'D2', 'D3', 'D4', 'D9', 'D10',
    'C2', 'C3'
]);
  
const EscogerAsientos = () => {
    const { seleccionados, seleccionarAsiento } = useAsientos();

    const handleSeleccionAsiento = (fila, numero) => {
        const idAsiento = `${fila}${numero}`;
        if (!asientosOcupados.has(idAsiento)) {
            seleccionarAsiento(idAsiento);
        }
    };
  
    return (
      <div className="escoger-asientos">
        <div className="escoger-asientos-pantalla"></div>
        <div className="pantalla-label">PANTALLA</div>
        {filas.map((fila) => (
          <div key={fila} className="fila">
            <div className="fila-letra">{fila}</div>
            <div className='asientos'>
              <div className="fila-asientos">
                {Array.from({ length: asientosPorFila }, (_, index) => {
                  const numeroAsiento = index + 1;
                  const idAsiento = `${fila}${numeroAsiento}`;
                  const isOcupado = asientosOcupados.has(idAsiento);
                  return (
                    <span
                      key={idAsiento}
                      className={`asiento ${isOcupado ? 'ocupado' : ''} ${seleccionados.has(idAsiento) ? 'seleccionado' : ''}`}
                      onClick={() => handleSeleccionAsiento(fila, numeroAsiento)}
                    />
                  );
                })}
              </div>  
            </div>
          </div>
        ))}
        <div className="leyenda">
            <div className="leyenda-item">
                <span className="asiento ejemplo disponible"></span>
                <span>Disponibles</span>
            </div>
            <div className="leyenda-item">
                <span className="asiento ejemplo ocupado"></span>
                <span>Ocupadas</span>
            </div>
            <div className="leyenda-item">
                <span className="asiento ejemplo seleccionado"></span>
                <span>Tu selección</span>
            </div>
        </div>
        </div>
    );
};

export default EscogerAsientos;
