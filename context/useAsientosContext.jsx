import React, { createContext, useContext, useState, useEffect } from 'react';

const AsientosContext = createContext();

export const AsientosProvider = ({ children }) => {
    const [cantidad, setCantidad] = useState(1);
    const [seleccionados, setSeleccionados] = useState(new Set());
    const [total, setTotal] = useState(0);
    const [precioBoleta, setPrecioBoleta] = useState(6000);
    const [seleccionadosFormato, setSeleccionadosFormato] = useState("");

    const resetAsientos = () => {
        setSeleccionados(new Set());
        setCantidad(1);
        setTotal(0);
    };

    useEffect(() => {
        setTotal(cantidad * precioBoleta);
    }, [cantidad, precioBoleta]);

    const ordenarAsientos = (a, b) => {
        const filaA = a[0];
        const filaB = b[0];
        const numA = parseInt(a.substring(1), 10);
        const numB = parseInt(b.substring(1), 10);
        if (filaA === filaB) {
            return numA - numB;
        }
        return filaA.localeCompare(filaB);
    };
    
    useEffect(() => {
        const formatSeleccionados = Array.from(seleccionados).sort(ordenarAsientos).join(', ');
        setSeleccionadosFormato(formatSeleccionados);
    }, [seleccionados]);

    const incrementarCantidad = () => setCantidad(c => c < 8 ? c + 1 : c);
    const decrementarCantidad = () => setCantidad(c => c > 1 ? c - 1 : c);

    const seleccionarAsiento = (idAsiento) => {
        setSeleccionados(prevSeleccionados => {
            const newSeleccionados = new Set(prevSeleccionados);
            if (newSeleccionados.has(idAsiento)) {
                newSeleccionados.delete(idAsiento);
            } else {
                if (newSeleccionados.size < cantidad) {
                    newSeleccionados.add(idAsiento);
                }
            }
            return newSeleccionados;
        });
    };

    return (
        <AsientosContext.Provider value={{ cantidad, incrementarCantidad, decrementarCantidad, seleccionados, seleccionadosFormato, seleccionarAsiento, total, setPrecioBoleta, resetAsientos }}>
            {children}
        </AsientosContext.Provider>
    );
};

export const useAsientos = () => useContext(AsientosContext);
