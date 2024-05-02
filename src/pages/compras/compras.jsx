import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompraCard from '../../components/CompraCard';
import Navbar from '../../components/shared/Navbar';
import "./compras.css";

const Compras = () => {
    const compras = JSON.parse(localStorage.getItem('compras')) || [];

    const navigate = useNavigate();

    const eliminarCompra = (index) => {
        const nuevasCompras = compras.filter((_, i) => i !== index);
        localStorage.setItem('compras', JSON.stringify(nuevasCompras));
        navigate('/compras');
    };

    if (compras.length == 0) {
        return (
          <>
            <Navbar/>
            <div className="compras-header">
                <h2 className="compras-titulo">
                    <span className="compras">COMPRAS</span>
                    <span className="recientes"> RECIENTES</span>
                </h2>
                <div className="estrenos-linea"></div>
            </div>
            <div className="error">
              No hay compras recientes
            </div>
          </>
        )
    }

    return (
        <>
            <Navbar/>
            <div className="compras-header">
                <h2 className="compras-titulo">
                    <span className="compras">COMPRAS</span>
                    <span className="recientes"> RECIENTES</span>
                </h2>
                <div className="estrenos-linea"></div>
            </div>
            <div>
                {compras.map((compra, index) => (
                    <CompraCard key={index} {...compra} eliminarCompra={() => eliminarCompra(index)} />
                ))}
            </div>
        </>
    );
};

export default Compras;
