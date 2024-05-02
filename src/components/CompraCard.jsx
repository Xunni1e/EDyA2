import React from 'react';
import "./CompraCard.css";

const CompraCard = ({ titulo, total, sillas, formato, sala, clasificacionEdad, teatro, fechaHora, poster, numeroTransaccion, eliminarCompra }) => {
    return (
        <div className="compra-card">
            <img src={poster} alt="Poster"/>
            <div>
                <h1>{titulo}</h1>
                <h3>{formato}</h3>
                <p>{sala}</p>
                <p>{clasificacionEdad}</p>
                <p>{teatro}</p>
                <p>{fechaHora}</p>
                <p>Sillas: {sillas}</p>
                <p>Total: ${total.toLocaleString()}</p>
                <p>Número de Transacción: {numeroTransaccion}</p>
                <button onClick={eliminarCompra} className="eliminar-compra-btn">Eliminar</button>
            </div>
        </div>
    );
};

export default CompraCard;
