import React from 'react';
import Navbar from '../../components/shared/Navbar';

const NotFound = () => {
    return (
        <>
            <Navbar/>
            <div className="error">
              Página no encontrada
            </div>
        </>
    );
};

export default NotFound;