import React, { useState, useEffect } from 'react';
import Navbar from "../../components/shared/Navbar"
import FormInput from "../../components/shared/FormInput"
import Select from "../../components/shared/Select"
import DatePicker from "../../components/shared/DatePicker"
import { useNavigate } from 'react-router-dom';
import "./registro.css"
const Registro =()=>{
    
    const documentTypes = ['Cédula', 'Pasaporte', 'Otro'];
    const cities = [
        'Seleccione una opción', 'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Cúcuta', 'Bucaramanga', 
        'Pereira', 'Manizales', 'Armenia', 'Ibagué', 'Neiva', 'Pasto', 'Popayán', 'Montería', 
        'Villavicencio', 'Tunja', 'Riohacha', 'Santa Marta', 'Valledupar', 'Sincelejo', 
        'San Andrés', 'Florencia', 'Leticia', 'Mocoa', 'Puerto Inírida', 'San José del Guaviare', 
        'Mitú', 'Arauca', 'Yopal', 'Quibdó'
    ];
    const departments = [
        'Seleccione una opción', 'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bogotá D.C.', 'Bolívar', 'Boyacá', 'Caldas', 
        'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 
        'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 
        'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 
        'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
    ];
    const estilos = {
        width: '95.9%',
        padding: '8px',
        border: 'none',
        borderRadius: '3px',
        backgroundColor: '#D5C6DC',
        color: '#000',
        fontWeight: '400',
        fontSize: '12px',
        marginBottom: '3%',
    }
    const navigate = useNavigate();

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const isValid = 
            selectedCity !== '' && selectedCity !== 'Seleccione una opción' &&
            selectedDepartment !== '' && selectedDepartment !== 'Seleccione una opción' &&
            birthDate;
        setIsFormValid(isValid);
    }, [selectedCity, selectedDepartment, birthDate]);

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        if (name === 'city') {
            setSelectedCity(value);
        } else if (name === 'department') {
            setSelectedDepartment(value);
        }
    };

    const handleDateChange = (date) => {
        setBirthDate(date);
    };

    const handleVolver = () => {
        if (isFormValid) {
            navigate(`/`);
        } else {
            alert("Debe llenar todos los campos.");
        }
    };

    return(
        <>
        <Navbar/>
            <div className="registro-container-1">
                <h1>Registro</h1>
                <hr className ="horizontal-line"></hr>
            </div>
            <div className="registro-container-2">
                <FormInput label="Correo" type="email" style={estilos}/>
                <FormInput label="Confirmar correo" type="email" style={estilos} />
                <FormInput label="Contraseña" type="password" style={estilos}/>
                <FormInput label="Confirmar contraseña" type="password" style={estilos} />
                <FormInput label="Nombres" style={estilos} />
                <FormInput label="Apellidos" style={estilos}/>
                <div className="contenedor-doble">
                    <Select label="Tipo de documento" options={documentTypes} className="doble" style={estilos}/>
                    <FormInput label="Número de identificación" type="id" className="doble" style={estilos}/>
                </div>
                <DatePicker label="Fecha de nacimiento" onChange={handleDateChange} style={estilos}/>
                <div className="contenedor-doble">
                    <Select label="Departamento" name="department" options={departments} className="doble" style={estilos} onChange={handleSelectChange} />
                    <Select label="Ciudad" name="city" options={cities} className="doble" style={estilos} onChange={handleSelectChange} />
                </div>
                <FormInput label="Dirección" style={estilos}/>
                <FormInput label="Teléfono" type="tel" style={estilos}/>
                <button type="button" className="btn-register" onClick={handleVolver}>
                    Registrarme
                </button>
            </div>
        </>
        
        
    )
}
export default Registro