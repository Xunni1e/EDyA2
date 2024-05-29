import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PeliculaHeader from "../../components/PeliculaHeader";
import Navbar from "../../components/shared/Navbar";
import DetallesPelicula from "../../components/DetallesPelicula";
import Teatro from "../../components/Teatro";
import "./infopelicula.css";

export const peliculasDB = [
    {
        id: 1,
        titulo: "Alerta Roja",
        fechaEstreno: "12 Noviembre 2021",
        genero: "Acción, Comedia",
        clasificacionEdad: "Recomendada para Mayores de 15 años",
        duracion: "1h 58min",
        poster: "/img/cartelera/alerta_roja.jpg",
        imagenFondo: "/img/headers/alerta_roja.jpg",
        sinopsis: "En el momento en que salta una nueva alerta roja enviada por la Interpol, todos los departamentos de policía del mundo se ponen en guardia. En esta ocasión el objetivo será atrapar a la ladrona de arte más buscada del planeta. El FBI decide poner en el caso a su mejor agente, John Hartley (Dwayne 'La Roca' Johnson). Sin embargo, tras un temerario atraco todo se complica y termina uniéndose a un criminal, Nolan Booth (Ryan Reynolds), con la intención de lograr detener a la fugitiva (Gal Gadot). Una coincidencia hará que todo cambie. Este particular trío deberá enfrentarse a una gran cantidad de peligros, como la jungla o una prisión, pero lo peor de todo es que tendrán que mantenerse unidos durante todo el tiempo.",
        protagonistas: ["Dwayne Johnson", "Ryan Reynolds", "Gal Gadot"],
        director: "Rawson Marshall Thurber",
        idioma: "Inglés",
        trailerUrl: "https://youtu.be/_L0DMAFBEjs",
        funciones: {
          "Cali": {
            "Unicentro": {
              "2D": ['10:20 AM', '11:50 AM', '2:40 PM', '4:10 PM', '9:50 PM'],
              "3D": ['10:40 AM', '11:15 AM', '1:50 PM', '4:35 PM', '10:20 PM']
            }
          },
          "Bogotá": {
            "Andino": {
              "2D": ['10:10 AM', '12:00 PM', '3:00 PM', '5:10 PM', '8:00 PM'],
              "3D": ['10:30 AM', '12:45 PM', '3:30 PM', '6:00 PM', '9:00 PM']
            }
          },
          "Medellín": {
            "Santafé": {
              "2D": ['9:50 AM', '12:10 PM', '3:20 PM', '5:40 PM', '8:30 PM'],
              "3D": ['10:00 AM', '1:00 PM', '4:00 PM', '6:20 PM', '9:20 PM']
            }
          },
          "Barranquilla": {
            "Buenavista": {
              "2D": ['10:30 AM', '1:20 PM', '4:00 PM', '6:30 PM', '9:10 PM'],
              "3D": ['11:00 AM', '2:00 PM', '4:50 PM', '7:20 PM', '10:00 PM']
            }
          },
          "Cartagena": {
            "Caribe Plaza": {
              "2D": ['10:15 AM', '1:10 PM', '3:50 PM', '6:10 PM', '8:45 PM'],
              "3D": ['10:45 AM', '1:30 PM', '4:10 PM', '7:00 PM', '9:40 PM']
            }
          },
          "Armenia": {
            "Portal Quindío": {
              "2D": ['10:05 AM', '12:50 PM', '3:40 PM', '6:15 PM', '9:05 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:05 PM', '6:50 PM', '9:35 PM']
            }
          },
          "Ibagué": {
            "La Estación": {
              "2D": ['9:55 AM', '12:45 PM', '3:35 PM', '6:10 PM', '8:55 PM'],
              "3D": ['10:15 AM', '1:05 PM', '3:55 PM', '6:40 PM', '9:25 PM']
            }
          },
          "Manizales": {
            "Fundadores": {
              "2D": ['10:00 AM', '12:40 PM', '3:30 PM', '6:05 PM', '8:50 PM'],
              "3D": ['10:20 AM', '1:00 PM', '3:50 PM', '6:35 PM', '9:20 PM']
            }
          },
          "Pasto": {
            "Único": {
              "2D": ['10:10 AM', '1:00 PM', '3:45 PM', '6:20 PM', '9:10 PM'],
              "3D": ['10:30 AM', '1:20 PM', '4:05 PM', '6:50 PM', '9:40 PM']
            }
          },
          "Pereira": {
            "Victoria": {
              "2D": ['9:50 AM', '12:30 PM', '3:15 PM', '5:50 PM', '8:35 PM'],
              "3D": ['10:10 AM', '12:55 PM', '3:40 PM', '6:15 PM', '9:00 PM']
            }
          },
          "Popayán": {
            "Campanario": {
              "2D": ['10:05 AM', '12:55 PM', '3:45 PM', '6:30 PM', '9:15 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:00 PM', '6:45 PM', '9:30 PM']
            }
          },
          "Cúcuta": {
            "Ventura Plaza": {
              "2D": ['10:00 AM', '12:45 PM', '3:30 PM', '6:00 PM', '8:45 PM'],
              "3D": ['10:20 AM', '1:05 PM', '3:50 PM', '6:30 PM', '9:15 PM']
            }
          }
        }
    },
    {
        id: 2,
        titulo: "Black Panther 2: Wakanda Forever",
        fechaEstreno: "11 Noviembre 2022",
        genero: "Acción, Aventura, Ciencia ficción",
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        duracion: "2h 43min",
        poster: "/img/cartelera/black_panther.jpg",
        imagenFondo: "/img/headers/black_panther.jpg",
        sinopsis: "La reina Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) y las Dora Milaje (incluida Florence Kasumba), luchan para proteger su nación de la injerencia de potencias mundiales a raíz de la muerte del rey T’Challa. Mientras los wakandianos se esfuerzan por adaptarse a su nueva etapa, los héroes deben actuar unidos, con la ayuda del Perro de la Guerra Nakia (Lupita Nyong’o) y Everett Ross (Martin Freeman), y forzar un nuevo destino para el reino de Wakanda.",
        protagonistas: ["Letita Wright", "Lupia Nyong'o", "Dania Gurira", "Tenoch Huerta"],
        director: "Ryan Coogler",
        idioma: "Inglés",
        trailerUrl: "https://youtu.be/BPjbiZQmBI4",
        funciones: {
          "Cali": {
            "Unicentro": {
              "2D": ['10:20 AM', '11:50 AM', '2:40 PM', '4:10 PM', '9:50 PM'],
              "3D": ['10:40 AM', '11:15 AM', '1:50 PM', '4:35 PM', '10:20 PM']
            }
          },
          "Bogotá": {
            "Andino": {
              "2D": ['10:10 AM', '12:00 PM', '3:00 PM', '5:10 PM', '8:00 PM'],
              "3D": ['10:30 AM', '12:45 PM', '3:30 PM', '6:00 PM', '9:00 PM']
            }
          },
          "Medellín": {
            "Santafé": {
              "2D": ['9:50 AM', '12:10 PM', '3:20 PM', '5:40 PM', '8:30 PM'],
              "3D": ['10:00 AM', '1:00 PM', '4:00 PM', '6:20 PM', '9:20 PM']
            }
          },
          "Barranquilla": {
            "Buenavista": {
              "2D": ['10:30 AM', '1:20 PM', '4:00 PM', '6:30 PM', '9:10 PM'],
              "3D": ['11:00 AM', '2:00 PM', '4:50 PM', '7:20 PM', '10:00 PM']
            }
          },
          "Cartagena": {
            "Caribe Plaza": {
              "2D": ['10:15 AM', '1:10 PM', '3:50 PM', '6:10 PM', '8:45 PM'],
              "3D": ['10:45 AM', '1:30 PM', '4:10 PM', '7:00 PM', '9:40 PM']
            }
          },
          "Armenia": {
            "Portal Quindío": {
              "2D": ['10:05 AM', '12:50 PM', '3:40 PM', '6:15 PM', '9:05 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:05 PM', '6:50 PM', '9:35 PM']
            }
          },
          "Ibagué": {
            "La Estación": {
              "2D": ['9:55 AM', '12:45 PM', '3:35 PM', '6:10 PM', '8:55 PM'],
              "3D": ['10:15 AM', '1:05 PM', '3:55 PM', '6:40 PM', '9:25 PM']
            }
          },
          "Manizales": {
            "Fundadores": {
              "2D": ['10:00 AM', '12:40 PM', '3:30 PM', '6:05 PM', '8:50 PM'],
              "3D": ['10:20 AM', '1:00 PM', '3:50 PM', '6:35 PM', '9:20 PM']
            }
          },
          "Pasto": {
            "Único": {
              "2D": ['10:10 AM', '1:00 PM', '3:45 PM', '6:20 PM', '9:10 PM'],
              "3D": ['10:30 AM', '1:20 PM', '4:05 PM', '6:50 PM', '9:40 PM']
            }
          },
          "Pereira": {
            "Victoria": {
              "2D": ['9:50 AM', '12:30 PM', '3:15 PM', '5:50 PM', '8:35 PM'],
              "3D": ['10:10 AM', '12:55 PM', '3:40 PM', '6:15 PM', '9:00 PM']
            }
          },
          "Popayán": {
            "Campanario": {
              "2D": ['10:05 AM', '12:55 PM', '3:45 PM', '6:30 PM', '9:15 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:00 PM', '6:45 PM', '9:30 PM']
            }
          },
          "Cúcuta": {
            "Ventura Plaza": {
              "2D": ['10:00 AM', '12:45 PM', '3:30 PM', '6:00 PM', '8:45 PM'],
              "3D": ['10:20 AM', '1:05 PM', '3:50 PM', '6:30 PM', '9:15 PM']
            }
          }
        }
    },
    {
        id: 3,
        titulo: 'Avatar: El camino del agua',
        fechaEstreno: "16 Diciembre 2022",
        genero: 'Aventura, Acción, Ciencia ficción',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        duracion: "3h 12min",
        poster: '/img/cartelera/avatar.jpg',
        imagenFondo: "/img/headers/avatar.jpg",
        sinopsis: "Más de una década después de los acontecimientos de &#39;Avatar&#39;, los Na&#39;vi Jake Sully, Neytiri y sus hijos viven en paz en los bosques de Pandora hasta que regresan los hombres del cielo. Entonces comienzan los problemas que persiguen sin descanso a la familia Sully, que decide hacer un gran sacrificio para mantener a su pueblo a salvo y seguir ellos con vida.",
        protagonistas: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang"],
        director: "James Cameron",
        idioma: "Inglés",
        trailerUrl: "https://youtu.be/a8Gx8wiNbs8",
        funciones: {
          "Cali": {
            "Unicentro": {
              "2D": ['10:20 AM', '11:50 AM', '2:40 PM', '4:10 PM', '9:50 PM'],
              "3D": ['10:40 AM', '11:15 AM', '1:50 PM', '4:35 PM', '10:20 PM']
            }
          },
          "Bogotá": {
            "Andino": {
              "2D": ['10:10 AM', '12:00 PM', '3:00 PM', '5:10 PM', '8:00 PM'],
              "3D": ['10:30 AM', '12:45 PM', '3:30 PM', '6:00 PM', '9:00 PM']
            }
          },
          "Medellín": {
            "Santafé": {
              "2D": ['9:50 AM', '12:10 PM', '3:20 PM', '5:40 PM', '8:30 PM'],
              "3D": ['10:00 AM', '1:00 PM', '4:00 PM', '6:20 PM', '9:20 PM']
            }
          },
          "Barranquilla": {
            "Buenavista": {
              "2D": ['10:30 AM', '1:20 PM', '4:00 PM', '6:30 PM', '9:10 PM'],
              "3D": ['11:00 AM', '2:00 PM', '4:50 PM', '7:20 PM', '10:00 PM']
            }
          },
          "Cartagena": {
            "Caribe Plaza": {
              "2D": ['10:15 AM', '1:10 PM', '3:50 PM', '6:10 PM', '8:45 PM'],
              "3D": ['10:45 AM', '1:30 PM', '4:10 PM', '7:00 PM', '9:40 PM']
            }
          },
          "Armenia": {
            "Portal Quindío": {
              "2D": ['10:05 AM', '12:50 PM', '3:40 PM', '6:15 PM', '9:05 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:05 PM', '6:50 PM', '9:35 PM']
            }
          },
          "Ibagué": {
            "La Estación": {
              "2D": ['9:55 AM', '12:45 PM', '3:35 PM', '6:10 PM', '8:55 PM'],
              "3D": ['10:15 AM', '1:05 PM', '3:55 PM', '6:40 PM', '9:25 PM']
            }
          },
          "Manizales": {
            "Fundadores": {
              "2D": ['10:00 AM', '12:40 PM', '3:30 PM', '6:05 PM', '8:50 PM'],
              "3D": ['10:20 AM', '1:00 PM', '3:50 PM', '6:35 PM', '9:20 PM']
            }
          },
          "Pasto": {
            "Único": {
              "2D": ['10:10 AM', '1:00 PM', '3:45 PM', '6:20 PM', '9:10 PM'],
              "3D": ['10:30 AM', '1:20 PM', '4:05 PM', '6:50 PM', '9:40 PM']
            }
          },
          "Pereira": {
            "Victoria": {
              "2D": ['9:50 AM', '12:30 PM', '3:15 PM', '5:50 PM', '8:35 PM'],
              "3D": ['10:10 AM', '12:55 PM', '3:40 PM', '6:15 PM', '9:00 PM']
            }
          },
          "Popayán": {
            "Campanario": {
              "2D": ['10:05 AM', '12:55 PM', '3:45 PM', '6:30 PM', '9:15 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:00 PM', '6:45 PM', '9:30 PM']
            }
          },
          "Cúcuta": {
            "Ventura Plaza": {
              "2D": ['10:00 AM', '12:45 PM', '3:30 PM', '6:00 PM', '8:45 PM'],
              "3D": ['10:20 AM', '1:05 PM', '3:50 PM', '6:30 PM', '9:15 PM']
            }
          }
        }
    },
    {
        id: 4,
        titulo: 'Cruella',
        fechaEstreno: "28 Mayo 2021",
        genero: 'Drama, Comedia, Crimen',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        duracion: "2h 41min",
        poster: '/img/cartelera/cruella.jpg',
        imagenFondo: "/img/headers/cruella.jpeg",
        sinopsis: "Londres, años 70. Decidida a convertirse en una exitosa diseñadora de moda, una joven y creativa estafadora llamada Estella (Emma Stone) se asocia con un par de ladrones para sobrevivir en las calles de la capital británica. Pero cuando su talento para la moda llama la atención de la legendaria diseñadora, la Baronesa von Hellman (Emma Thompson), Estella cambia el rumbo de su vida hasta que una serie de acontecimientos la llevan a asumir su lado malvado y a convertirse en la estridente y vengativa 'Cruella'.",
        protagonistas: ["Emma Stone", "Emma Thompson", "Joel Fry", "Paul Walter Hauser"],
        director: "Craig Gillespie",
        idioma: "Inglés",
        trailerUrl: "https://youtu.be/gmRKv7n2If8",
        funciones: {
          "Cali": {
            "Unicentro": {
              "2D": ['10:20 AM', '11:50 AM', '2:40 PM', '4:10 PM', '9:50 PM'],
              "3D": ['10:40 AM', '11:15 AM', '1:50 PM', '4:35 PM', '10:20 PM']
            }
          },
          "Bogotá": {
            "Andino": {
              "2D": ['10:10 AM', '12:00 PM', '3:00 PM', '5:10 PM', '8:00 PM'],
              "3D": ['10:30 AM', '12:45 PM', '3:30 PM', '6:00 PM', '9:00 PM']
            }
          },
          "Medellín": {
            "Santafé": {
              "2D": ['9:50 AM', '12:10 PM', '3:20 PM', '5:40 PM', '8:30 PM'],
              "3D": ['10:00 AM', '1:00 PM', '4:00 PM', '6:20 PM', '9:20 PM']
            }
          },
          "Barranquilla": {
            "Buenavista": {
              "2D": ['10:30 AM', '1:20 PM', '4:00 PM', '6:30 PM', '9:10 PM'],
              "3D": ['11:00 AM', '2:00 PM', '4:50 PM', '7:20 PM', '10:00 PM']
            }
          },
          "Cartagena": {
            "Caribe Plaza": {
              "2D": ['10:15 AM', '1:10 PM', '3:50 PM', '6:10 PM', '8:45 PM'],
              "3D": ['10:45 AM', '1:30 PM', '4:10 PM', '7:00 PM', '9:40 PM']
            }
          },
          "Armenia": {
            "Portal Quindío": {
              "2D": ['10:05 AM', '12:50 PM', '3:40 PM', '6:15 PM', '9:05 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:05 PM', '6:50 PM', '9:35 PM']
            }
          },
          "Ibagué": {
            "La Estación": {
              "2D": ['9:55 AM', '12:45 PM', '3:35 PM', '6:10 PM', '8:55 PM'],
              "3D": ['10:15 AM', '1:05 PM', '3:55 PM', '6:40 PM', '9:25 PM']
            }
          },
          "Manizales": {
            "Fundadores": {
              "2D": ['10:00 AM', '12:40 PM', '3:30 PM', '6:05 PM', '8:50 PM'],
              "3D": ['10:20 AM', '1:00 PM', '3:50 PM', '6:35 PM', '9:20 PM']
            }
          },
          "Pasto": {
            "Único": {
              "2D": ['10:10 AM', '1:00 PM', '3:45 PM', '6:20 PM', '9:10 PM'],
              "3D": ['10:30 AM', '1:20 PM', '4:05 PM', '6:50 PM', '9:40 PM']
            }
          },
          "Pereira": {
            "Victoria": {
              "2D": ['9:50 AM', '12:30 PM', '3:15 PM', '5:50 PM', '8:35 PM'],
              "3D": ['10:10 AM', '12:55 PM', '3:40 PM', '6:15 PM', '9:00 PM']
            }
          },
          "Popayán": {
            "Campanario": {
              "2D": ['10:05 AM', '12:55 PM', '3:45 PM', '6:30 PM', '9:15 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:00 PM', '6:45 PM', '9:30 PM']
            }
          },
          "Cúcuta": {
            "Ventura Plaza": {
              "2D": ['10:00 AM', '12:45 PM', '3:30 PM', '6:00 PM', '8:45 PM'],
              "3D": ['10:20 AM', '1:05 PM', '3:50 PM', '6:30 PM', '9:15 PM']
            }
          }
        }
    },
    {
        id: 5,
        titulo: 'Dune: Parte Dos',
        fechaEstreno: "25 Febrero 2024",
        genero: 'Acción, Aventura, Drama',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        duracion: "2h 46min",
        poster: '/img/cartelera/dune.jpg',
        imagenFondo: "/img/headers/dune.jpeg",
        sinopsis: "Tras los sucesos de la primera parte acontecidos en el planeta Arrakis, el joven Paul Atreides se une a la tribu de los Fremen y comienza un viaje espiritual y marcial para convertirse en mesías, mientras intenta evitar el horrible pero inevitable futuro que ha presenciado: una Guerra Santa en su nombre, que se extiende por todo el universo conocido",
        protagonistas: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        director: "Denis Villenueve",
        idioma: "Inglés",
        trailerUrl: "https://youtu.be/pMe_te9QUa0",
        funciones: {
          "Cali": {
            "Unicentro": {
              "2D": ['10:20 AM', '11:50 AM', '2:40 PM', '4:10 PM', '9:50 PM'],
              "3D": ['10:40 AM', '11:15 AM', '1:50 PM', '4:35 PM', '10:20 PM']
            }
          },
          "Bogotá": {
            "Andino": {
              "2D": ['10:10 AM', '12:00 PM', '3:00 PM', '5:10 PM', '8:00 PM'],
              "3D": ['10:30 AM', '12:45 PM', '3:30 PM', '6:00 PM', '9:00 PM']
            }
          },
          "Medellín": {
            "Santafé": {
              "2D": ['9:50 AM', '12:10 PM', '3:20 PM', '5:40 PM', '8:30 PM'],
              "3D": ['10:00 AM', '1:00 PM', '4:00 PM', '6:20 PM', '9:20 PM']
            }
          },
          "Barranquilla": {
            "Buenavista": {
              "2D": ['10:30 AM', '1:20 PM', '4:00 PM', '6:30 PM', '9:10 PM'],
              "3D": ['11:00 AM', '2:00 PM', '4:50 PM', '7:20 PM', '10:00 PM']
            }
          },
          "Cartagena": {
            "Caribe Plaza": {
              "2D": ['10:15 AM', '1:10 PM', '3:50 PM', '6:10 PM', '8:45 PM'],
              "3D": ['10:45 AM', '1:30 PM', '4:10 PM', '7:00 PM', '9:40 PM']
            }
          },
          "Armenia": {
            "Portal Quindío": {
              "2D": ['10:05 AM', '12:50 PM', '3:40 PM', '6:15 PM', '9:05 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:05 PM', '6:50 PM', '9:35 PM']
            }
          },
          "Ibagué": {
            "La Estación": {
              "2D": ['9:55 AM', '12:45 PM', '3:35 PM', '6:10 PM', '8:55 PM'],
              "3D": ['10:15 AM', '1:05 PM', '3:55 PM', '6:40 PM', '9:25 PM']
            }
          },
          "Manizales": {
            "Fundadores": {
              "2D": ['10:00 AM', '12:40 PM', '3:30 PM', '6:05 PM', '8:50 PM'],
              "3D": ['10:20 AM', '1:00 PM', '3:50 PM', '6:35 PM', '9:20 PM']
            }
          },
          "Pasto": {
            "Único": {
              "2D": ['10:10 AM', '1:00 PM', '3:45 PM', '6:20 PM', '9:10 PM'],
              "3D": ['10:30 AM', '1:20 PM', '4:05 PM', '6:50 PM', '9:40 PM']
            }
          },
          "Pereira": {
            "Victoria": {
              "2D": ['9:50 AM', '12:30 PM', '3:15 PM', '5:50 PM', '8:35 PM'],
              "3D": ['10:10 AM', '12:55 PM', '3:40 PM', '6:15 PM', '9:00 PM']
            }
          },
          "Popayán": {
            "Campanario": {
              "2D": ['10:05 AM', '12:55 PM', '3:45 PM', '6:30 PM', '9:15 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:00 PM', '6:45 PM', '9:30 PM']
            }
          },
          "Cúcuta": {
            "Ventura Plaza": {
              "2D": ['10:00 AM', '12:45 PM', '3:30 PM', '6:00 PM', '8:45 PM'],
              "3D": ['10:20 AM', '1:05 PM', '3:50 PM', '6:30 PM', '9:15 PM']
            }
          }
        }
    },
    {
        id: 6,
        titulo: 'Dungeons & Dragones: Honor entre ladrones',
        fechaEstreno: "31 Marzo 2023",
        genero: 'Aventura, Fantasía',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        duracion: "2h 14min",
        poster: '/img/cartelera/d&d.jpg',
        imagenFondo: "/img/headers/d&d.jpg",
        sinopsis: "Un ladrón encantador y una banda de aventureros inverosímiles emprenden un atraco épico para recuperar una reliquia perdida, pero las cosas salen peligrosamente mal cuando se topan con las personas equivocadas.",
        protagonistas: ["Chris Pine", "Michelle Rodriguez", "Justice Smith"],
        director: "Chris McKay",
        idioma: "Inglés",
        trailerUrl: "https://youtu.be/Q6nCZDpvA9k",
        funciones: {
          "Cali": {
            "Unicentro": {
              "2D": ['10:20 AM', '11:50 AM', '2:40 PM', '4:10 PM', '9:50 PM'],
              "3D": ['10:40 AM', '11:15 AM', '1:50 PM', '4:35 PM', '10:20 PM']
            }
          },
          "Bogotá": {
            "Andino": {
              "2D": ['10:10 AM', '12:00 PM', '3:00 PM', '5:10 PM', '8:00 PM'],
              "3D": ['10:30 AM', '12:45 PM', '3:30 PM', '6:00 PM', '9:00 PM']
            }
          },
          "Medellín": {
            "Santafé": {
              "2D": ['9:50 AM', '12:10 PM', '3:20 PM', '5:40 PM', '8:30 PM'],
              "3D": ['10:00 AM', '1:00 PM', '4:00 PM', '6:20 PM', '9:20 PM']
            }
          },
          "Barranquilla": {
            "Buenavista": {
              "2D": ['10:30 AM', '1:20 PM', '4:00 PM', '6:30 PM', '9:10 PM'],
              "3D": ['11:00 AM', '2:00 PM', '4:50 PM', '7:20 PM', '10:00 PM']
            }
          },
          "Cartagena": {
            "Caribe Plaza": {
              "2D": ['10:15 AM', '1:10 PM', '3:50 PM', '6:10 PM', '8:45 PM'],
              "3D": ['10:45 AM', '1:30 PM', '4:10 PM', '7:00 PM', '9:40 PM']
            }
          },
          "Armenia": {
            "Portal Quindío": {
              "2D": ['10:05 AM', '12:50 PM', '3:40 PM', '6:15 PM', '9:05 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:05 PM', '6:50 PM', '9:35 PM']
            }
          },
          "Ibagué": {
            "La Estación": {
              "2D": ['9:55 AM', '12:45 PM', '3:35 PM', '6:10 PM', '8:55 PM'],
              "3D": ['10:15 AM', '1:05 PM', '3:55 PM', '6:40 PM', '9:25 PM']
            }
          },
          "Manizales": {
            "Fundadores": {
              "2D": ['10:00 AM', '12:40 PM', '3:30 PM', '6:05 PM', '8:50 PM'],
              "3D": ['10:20 AM', '1:00 PM', '3:50 PM', '6:35 PM', '9:20 PM']
            }
          },
          "Pasto": {
            "Único": {
              "2D": ['10:10 AM', '1:00 PM', '3:45 PM', '6:20 PM', '9:10 PM'],
              "3D": ['10:30 AM', '1:20 PM', '4:05 PM', '6:50 PM', '9:40 PM']
            }
          },
          "Pereira": {
            "Victoria": {
              "2D": ['9:50 AM', '12:30 PM', '3:15 PM', '5:50 PM', '8:35 PM'],
              "3D": ['10:10 AM', '12:55 PM', '3:40 PM', '6:15 PM', '9:00 PM']
            }
          },
          "Popayán": {
            "Campanario": {
              "2D": ['10:05 AM', '12:55 PM', '3:45 PM', '6:30 PM', '9:15 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:00 PM', '6:45 PM', '9:30 PM']
            }
          },
          "Cúcuta": {
            "Ventura Plaza": {
              "2D": ['10:00 AM', '12:45 PM', '3:30 PM', '6:00 PM', '8:45 PM'],
              "3D": ['10:20 AM', '1:05 PM', '3:50 PM', '6:30 PM', '9:15 PM']
            }
          }
        }
    },
    {
        id: 7,
        titulo: 'Civil War',
        fechaEstreno: "18 Abril 2024",
        genero: 'Acción',
        clasificacionEdad: "Recomendada para Mayores de 12 años",
        duracion: "2h 43min",
        poster: '/img/cartelera/civil_war.jpg',
        imagenFondo: "/img/headers/civil_war.jpeg",
        sinopsis: "En un futuro próximo, un equipo de periodistas viajará por los Estados Unidos durante una guerra civil que se intensifica rápidamente y que se ha apoderado de toda la nación.",
        protagonistas: ["Kirsten Dunst", "Cailee Spaeny", "Wagner Moura"],
        director: "Alex Garland",
        idioma: "Inglés",
        trailerUrl: "https://youtu.be/aDyQxtg0V2w",
        funciones: {
          "Cali": {
            "Unicentro": {
              "2D": ['10:20 AM', '11:50 AM', '2:40 PM', '4:10 PM', '9:50 PM'],
              "3D": ['10:40 AM', '11:15 AM', '1:50 PM', '4:35 PM', '10:20 PM']
            }
          },
          "Bogotá": {
            "Andino": {
              "2D": ['10:10 AM', '12:00 PM', '3:00 PM', '5:10 PM', '8:00 PM'],
              "3D": ['10:30 AM', '12:45 PM', '3:30 PM', '6:00 PM', '9:00 PM']
            }
          },
          "Medellín": {
            "Santafé": {
              "2D": ['9:50 AM', '12:10 PM', '3:20 PM', '5:40 PM', '8:30 PM'],
              "3D": ['10:00 AM', '1:00 PM', '4:00 PM', '6:20 PM', '9:20 PM']
            }
          },
          "Barranquilla": {
            "Buenavista": {
              "2D": ['10:30 AM', '1:20 PM', '4:00 PM', '6:30 PM', '9:10 PM'],
              "3D": ['11:00 AM', '2:00 PM', '4:50 PM', '7:20 PM', '10:00 PM']
            }
          },
          "Cartagena": {
            "Caribe Plaza": {
              "2D": ['10:15 AM', '1:10 PM', '3:50 PM', '6:10 PM', '8:45 PM'],
              "3D": ['10:45 AM', '1:30 PM', '4:10 PM', '7:00 PM', '9:40 PM']
            }
          },
          "Armenia": {
            "Portal Quindío": {
              "2D": ['10:05 AM', '12:50 PM', '3:40 PM', '6:15 PM', '9:05 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:05 PM', '6:50 PM', '9:35 PM']
            }
          },
          "Ibagué": {
            "La Estación": {
              "2D": ['9:55 AM', '12:45 PM', '3:35 PM', '6:10 PM', '8:55 PM'],
              "3D": ['10:15 AM', '1:05 PM', '3:55 PM', '6:40 PM', '9:25 PM']
            }
          },
          "Manizales": {
            "Fundadores": {
              "2D": ['10:00 AM', '12:40 PM', '3:30 PM', '6:05 PM', '8:50 PM'],
              "3D": ['10:20 AM', '1:00 PM', '3:50 PM', '6:35 PM', '9:20 PM']
            }
          },
          "Pasto": {
            "Único": {
              "2D": ['10:10 AM', '1:00 PM', '3:45 PM', '6:20 PM', '9:10 PM'],
              "3D": ['10:30 AM', '1:20 PM', '4:05 PM', '6:50 PM', '9:40 PM']
            }
          },
          "Pereira": {
            "Victoria": {
              "2D": ['9:50 AM', '12:30 PM', '3:15 PM', '5:50 PM', '8:35 PM'],
              "3D": ['10:10 AM', '12:55 PM', '3:40 PM', '6:15 PM', '9:00 PM']
            }
          },
          "Popayán": {
            "Campanario": {
              "2D": ['10:05 AM', '12:55 PM', '3:45 PM', '6:30 PM', '9:15 PM'],
              "3D": ['10:25 AM', '1:15 PM', '4:00 PM', '6:45 PM', '9:30 PM']
            }
          },
          "Cúcuta": {
            "Ventura Plaza": {
              "2D": ['10:00 AM', '12:45 PM', '3:30 PM', '6:00 PM', '8:45 PM'],
              "3D": ['10:20 AM', '1:05 PM', '3:50 PM', '6:30 PM', '9:15 PM']
            }
          }
        }
    }
];

const InfoPelicula = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    });

    const { id } = useParams();

    const datosPelicula = peliculasDB.find(p => p.id === parseInt(id));

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
        <div className="info-pelicula">
          <PeliculaHeader
            titulo={datosPelicula.titulo}
            fechaEstreno={datosPelicula.fechaEstreno}
            genero={datosPelicula.genero}
            clasificacionEdad={datosPelicula.clasificacionEdad}
            duracion={datosPelicula.duracion}
            poster={datosPelicula.poster}
            imagenFondo={datosPelicula.imagenFondo}
            trailerUrl={datosPelicula.trailerUrl}
          />
          <DetallesPelicula
            sinopsis={datosPelicula.sinopsis}
            protagonistas={datosPelicula.protagonistas}
            director={datosPelicula.director}
            idioma={datosPelicula.idioma}
          />
          <div>
            <Teatro funciones={datosPelicula.funciones}/>
          </div>
        </div>
      </>
    );
};

export default InfoPelicula;