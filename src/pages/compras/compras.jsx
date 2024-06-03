import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CompraCard from '../../components/CompraCard';
import Navbar from '../../components/shared/Navbar';
import "./compras.css";
import { auth } from '../../firebase/firebase';
import { db } from '../../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { useAuth } from '../../../context/authContext';

const Compras = () => {
    const [comprasBd, setComprasBd] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserCompras = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const userDetails = docSnap.data();
                        setComprasBd(userDetails?.compras || []);
                    } else {
                        console.log("Búsqueda fallida");
                    }
                    setLoading(false); 
                } else {
                    setLoading(false);
                    setComprasBd([]); 
                }
            } catch (error) {
                console.error("Error al obtener las compras del usuario:", error);
                setLoading(false); 
            }
        };

        fetchUserCompras();
    }, []);

    const navigate = useNavigate();
    const { ciudad } = useParams();

    const eliminarCompra = (index) => {
        const nuevasCompras = comprasBd.filter((_, i) => i !== index);
        setComprasBd(nuevasCompras);
        navigate(`/${ciudad}/compras`);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (comprasBd.length === 0) {
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
        );
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
                {comprasBd.map((compra, index) => (
                    <CompraCard key={index} {...compra} eliminarCompra={() => eliminarCompra(index)} />
                ))}
            </div>
        </>
    );
};

export default Compras