import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { peliculasDB } from '../pages/infopelicula/infopelicula';
import { useAsientos } from '../../context/useAsientosContext';
import "./DetallesPago.css";

const DetallesPago = ({ titulo, total, formato, sala, clasificacionEdad, fechaHora, poster }) => {
    const { seleccionadosFormato } = useAsientos()
    const navigate = useNavigate();

    const { id, ciudad } = useParams();
    const { resetAsientos } = useAsientos();

    const pelicula = peliculasDB.find(p => p.id === parseInt(id));
    const teatro = pelicula && pelicula.funciones && pelicula.funciones[ciudad] ? Object.keys(pelicula.funciones[ciudad])[0] : 'Teatro no definido';

    const handlePagar = () => {
        const nuevaCompra = {
            titulo: titulo,
            total: total,
            sillas: seleccionadosFormato,
            formato: formato,
            sala: sala,
            clasificacionEdad: clasificacionEdad,
            teatro: teatro + " " + ciudad,
            fechaHora: fechaHora,
            poster: poster,
            numeroTransaccion: numeroTransaccion
        };

        const compras = JSON.parse(localStorage.getItem('compras')) || [];
        compras.push(nuevaCompra);
        localStorage.setItem('compras', JSON.stringify(compras));

        resetAsientos();

        navigate(`/${ciudad}/compras`);
    };

    var numeroTransaccion = 0;

    return (
        <div className="detalles-pago">
            <div className="detalles-pago-pelicula-">
                <div className="total-pago">
                    <span>Total a pagar:</span>
                    <span className="total-precio">${total.toLocaleString()}</span>
                </div>
                <div className="datos-pago"> 
                    <p>Sillas: {seleccionadosFormato}</p>
                    <p>Número de transacción: {numeroTransaccion = Math.floor(Math.random() * 90000000) + 10000000}</p>
                </div>
            </div>
            <button className="boton-pagar" onClick={handlePagar}>Pagar</button>
        </div>
    );
};

export default DetallesPago;
