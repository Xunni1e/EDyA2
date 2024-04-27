import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carrusel.css'; 

const Carrusel = ({ imagenes }) => {
    return (
        <div className='carrusel-outer'>
        <Swiper
            modules={[Navigation, Autoplay]} // Define los módulos aquí
            spaceBetween={0} // Ajusta el espacio entre las diapositivas
            slidesPerView={'4.2'} // Ajusta para que las diapositivas se redimensionen automáticamente
            centeredSlides={true} // Centra las diapositivas
            loop={true} // Habilita el loop infinito
            navigation={false} // Muestra los botones de navegación
            autoplay={{
                delay: 2000, // El tiempo en milisegundos antes de cambiar a la siguiente diapositiva
                disableOnInteraction: false, // Continúa el autoplay incluso después de interactuar con el carrusel
            }}
            className="mySwiper"
        >
            {imagenes.map((imagen, index) => (
                <SwiperSlide key={index}>
                    {/* Envuelve la imagen en un div si necesitas más control sobre los estilos */}
                    <img src={imagen} alt={`Imagen ${index}`} className="swiper-image" />
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
  };
  
  export default Carrusel;