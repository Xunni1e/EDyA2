import React from 'react';
import { useAsientos } from '../hooks/useAsientos';
import { useNavigate } from 'react-router-dom';
import "./DetallesPago.css";

const DetallesPago = ({ titulo, total, formato, sala, clasificacionEdad, teatro, fechaHora, poster }) => {
    const { seleccionadosFormato } = useAsientos()
    const navigate = useNavigate();

    const handlePagar = () => {
        const nuevaCompra = {
            titulo: titulo,
            total: total,
            sillas: seleccionadosFormato,
            formato: formato,
            sala: sala,
            clasificacionEdad: clasificacionEdad,
            teatro: teatro,
            fechaHora: fechaHora,
            poster: poster,
            numeroTransaccion: numeroTransaccion
        };

        const compras = JSON.parse(localStorage.getItem('compras')) || [];
        compras.push(nuevaCompra);
        localStorage.setItem('compras', JSON.stringify(compras));

        navigate('/compras');
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
