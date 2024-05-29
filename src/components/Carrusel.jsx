import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrusel.css'; 

const Carrusel = ({ imagenes }) => {
    return (
        <div className='carrusel-outer'>
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={'4.2'}
            centeredSlides={true}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={false}
            preloadImages={true}
            updateOnImagesReady={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            className="mySwiper"
        >
            {imagenes.map((imagen, index) => (
                <SwiperSlide key={index}>
                    <img src={imagen} alt={`Imagen ${index}`} className="swiper-image" />
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
  };
  
  export default Carrusel;