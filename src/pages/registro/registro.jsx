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
    const cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];
    const departments = ['Cundinamarca', 'Antioquia', 'Valle del cauca', 'Atlantico'];

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
   

    
    const estilos = {
        width: '100%',
        padding: '8px',
        border: 'none',
        borderRadius: '3px',
        backgroundColor: '#D5C6DC',
        color: '#000',
        fontWeight: 'bold',
        marginBottom: '3%'
    }
    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(`/`);
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
                    <Select label="Documento de Identidad" options={documentTypes} value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="doble" style={estilos} />
                    <FormInput type="text" value={documentId} onChange={(e) => setDocumentId(e.target.value)} className="doble" style={estilos} />
                </div>
                <DatePicker label="Fecha de nacimiento" type = "date" value={birthDate} onChange={(date) => setBirthDate(date.target.value)} style={estilos} />
                <div className="contenedor-doble">
                    <Select label="Departamento" options={departments} value={department} onChange={(e) => setDepartment(e.target.value)} className="doble" style={estilos} />
                    <Select label="Ciudad de residencia" options={cities} value={city} onChange={(e) => setCity(e.target.value)} className="doble" style={estilos} />
                </div>
                <FormInput label="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} style={estilos} />
                <FormInput label="Teléfono" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={estilos} />
                <button type="submit" className="btn-register">Registrarme</button>
            </form>
        </div>
    </>
        
        
    )
}
export default Registro