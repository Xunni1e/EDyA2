import React, { useEffect } from 'react';
import Navbar from "../../components/shared/Navbar"
import FormInput from "../../components/shared/FormInput"
import Select from "../../components/shared/Select"
import DatePicker from "../../components/shared/DatePicker"
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./registro.css"
import { db,auth } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";


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
    };

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [documentId, setDocumentId] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [department, setDepartment] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
   
    const navigate = useNavigate();

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
            setCity(value);
        } else if (name === 'department') {
            setSelectedDepartment(value);
            setDepartment(value);
        }
        validateForm();
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setBirthDate(newDate);
        validateForm();
    };;

    const handleVolver = () => {
        if (isFormValid) {
            navigate(`/`);
        } else {
            alert("Debe llenar todos los campos.");
        }
    };

    const formatDateForFirestore = (date) => {
        const [day, month, year] = date.split('-');
        return `${year}-${month}-${day}`;
       
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        if (email !== confirmEmail) {
            alert("Los correos electrónicos no coinciden.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        try{
            await createUserWithEmailAndPassword(auth, email, password );
            const user = auth.currentUser;
            console.log(user)
            if(user){
                await setDoc(doc(db, "Users", user.uid),{
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                    documentType: documentType,
                    documentId: documentId,
                    birthDate:formatDateForFirestore(birthDate),
                    department: department,
                    city: city,
                    address: address,
                    phone: phone,
                    
                })
                alert("Usuario registrado exitosamente!");
                handleVolver();
            }   
            return user;
        }catch(error){
            console.error(error)
        }
    };


    return(
        <>
        <Navbar />
        <div className="registro-container-1">
            <h1>Registro</h1>
            <hr className="horizontal-line"></hr>
        </div>
        <div className="registro-container-2">
            <form onSubmit={handleRegister}>
                <FormInput label="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={estilos} />
                <FormInput label="Confirmar correo" type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} style={estilos} />
                <FormInput label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={estilos} />
                <FormInput label="Confirmar contraseña" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={estilos} />
                <FormInput label="Nombres" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={estilos} />
                <FormInput label="Apellidos" value={lastName} onChange={(e) => setLastName(e.target.value)} style={estilos} />
                <div className="contenedor-doble">
                    <Select label="Tipo de documento" options={documentTypes} value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="doble" style={estilos} />
                    <FormInput label="Número de identificación" type="text" value={documentId} onChange={(e) => setDocumentId(e.target.value)} className="doble" style={estilos} />
                </div>
                <DatePicker label="Fecha de nacimiento" type="date" value={birthDate} onChange={handleDateChange} style={estilos} />
                <div className="contenedor-doble">
                    <Select label="Departamento" name="department" options={departments} value={department} onChange={handleSelectChange} className="doble" style={estilos} />
                    <Select label="Ciudad" name="city" options={cities} value={city} onChange={handleSelectChange} className="doble" style={estilos} />
                </div>
                <FormInput label="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} style={estilos} />
                <FormInput label="Teléfono" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={estilos} />
                <button type="submit" className="btn-register" onClick={handleVolver}>Registrarme</button>
            </form>
        </div>
    </>
        
        
    )
}
export default Registro