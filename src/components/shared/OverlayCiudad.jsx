
import React, { useEffect, useRef} from 'react';
import './OverlayCiudad.css'





const OverlayCiudad=({isOpen, onClose, children, position, ciudad, changeCity})=>{

    const overlayRef = useRef(null);

        
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                    onClose();
                }
            };

            
            document.addEventListener("mousedown", handleClickOutside);

            
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [onClose]);



    const overlayStyle={
        top: position.top +50,
        left: position.left-160
    }

    const groupedCiudad = [];
        for (let i = 0; i < ciudad.length; i += 2) {
        groupedCiudad.push(ciudad.slice(i, i + 2));
  }

    const midIndex = Math.ceil(ciudad.length/2);
    const columna1 = ciudad.slice(0,midIndex);
    const columna2 = ciudad.slice(midIndex);



    return(
        <>
        {isOpen?(
            <div className="city-container">
                <div className="city-overlay" style={overlayStyle} ref={overlayRef}>
                <div className="city-background" onClick={onClose}/>

                    <div className="city-row">
                        {columna1.map((ciudad,index) => (
                            <button className="city-item" key={index} onClick={()=>changeCity(ciudad)}>{ciudad}</button>
                    ))}
                    </div>
                    <div className="city-row">
                        {columna2.map((ciudad,index) => (
                            <button className="city-item" key={index} onClick={()=>changeCity(ciudad)}>{ciudad}</button>
                            
                    ))}
                    </div>
                    
                
                    <hr className ="horizontal-line"></hr>
                {children}
                </div>
                <div className="overlay-backdrop" onClick={onClose}/>
          </div>
        ):null}
        </>
    )
}

export default OverlayCiudad;