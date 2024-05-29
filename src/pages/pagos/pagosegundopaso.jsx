import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useFuncion } from "../../../context/useFuncionContext";
import Navbar from "../../components/shared/Navbar";
import DetallesPeliculaPago from "../../components/shared/DetallesPeliculaPago";
import CantidadAsientos from "../../components/CantidadAsientos";

const peliculas = [
    {
        id: 1,
        titulo: "Alerta Roja",
        clasificacionEdad: "Recomendada para Mayores de 15 años",
        poster: "/img/cartelera/alerta_roja.jpg",
        sala: "Sala 04"
    },
    {
        id: 2,
        titulo: "Black Panther 2: Wakanda Forever",
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        poster: "/img/cartelera/black_panther.jpg",
        sala: "Sala 02"
    },
    {
        id: 3,
        titulo: 'Avatar: El camino del agua',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        poster: '/img/cartelera/avatar.jpg',
        sala: "Sala 07"
    },
    {
        id: 4,
        titulo: 'Cruella',
        fechaEstreno: "28 Mayo 2021",
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        poster: '/img/cartelera/cruella.jpg',
        sala: "Sala 05"
    },
    {
        id: 5,
        titulo: 'Dune: Parte Dos',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        poster: '/img/cartelera/dune.jpg',
        sala: "Sala 06"
    },
    {
        id: 6,
        titulo: 'Dungeons & Dragones: Honor entre ladrones',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        poster: '/img/cartelera/d&d.jpg',
        sala: "Sala 01"
    },
    {
        id: 7,
        titulo: 'Civil War',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        poster: '/img/cartelera/civil_war.jpg',
        sala: "Sala 03"
    }
];

const PagoSegundoPaso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { selectedShowtime, formato } = useFuncion();

  const { id } = useParams();

    const datosPelicula = peliculas.find(p => p.id === parseInt(id));

    if (!datosPelicula) {
        return (
          <>
            <Navbar/>
            <div className="error">
              Película no disponible
            </div>
          </>
        )
    }

  return (
    <>
      <Navbar/>
      <DetallesPeliculaPago
        titulo={datosPelicula.titulo}
        poster={datosPelicula.poster}
        formato={formato}
        sala={datosPelicula.sala}
        clasificacionEdad={datosPelicula.clasificacionEdad}
        teatro={datosPelicula.teatro}
        fechaHora={selectedShowtime || 'Fecha y hora no seleccionadas'}
      />
      <CantidadAsientos/>
    </>
  );
};

export default PagoSegundoPaso;