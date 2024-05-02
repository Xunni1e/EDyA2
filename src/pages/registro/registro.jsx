import Navbar from "../../components/shared/Navbar"
import FormInput from "../../components/shared/FormInput"
import Select from "../../components/shared/Select"
import DatePicker from "../../components/shared/DatePicker"
import { useNavigate } from 'react-router-dom';
import "./registro.css"
const Registro =()=>{
    
    const documentTypes = ['Cédula', 'Pasaporte', 'Otro'];
    const cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];
    const departments = ['Cundinamarca', 'Antioquia', 'Valle del cauca', 'Atlantico'];
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
        navigate(-1); // -1 para volver a la ruta anterior
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
                    <Select label="Documento de Identidad" options={documentTypes} className="doble" style={estilos}/>
                    <FormInput type="id" className="doble" style={estilos}/>
                </div>
                <DatePicker label="Fecha de nacimiento" style={estilos}/>
                <div className="contenedor-doble">
                    <Select label="Departamento" options={departments} className="doble" style={estilos}/>
                    <Select label="Ciudad de residencia" options={cities} className="doble" style={estilos}/>
                </div>
                <FormInput label="Dirección" style={estilos}/>
                <FormInput label="Teléfono" type="tel" style={estilos}/>
                <button type="submit" className="btn-register" onClick={handleVolver}>Registrarme</button>
            </div>
        </>
        
        
    )
}
export default Registro