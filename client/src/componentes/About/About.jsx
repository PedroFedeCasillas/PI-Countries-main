import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";
import useWindowDimensions from "../Hook/useWindowsDimensions";
import flecha from "./flecha_atras.png";
import Footer from "../Footer/Footer"

export default function About() {
  const { width } = useWindowDimensions();
  const movil = 460;
  return (
    <>
      <header className={style.header}>
        <Link to="/countries">
          {width > movil ? (
            <button className={style.volver}>Volver</button>
          ) : (
            <button className={style.volver}>
              <img
                src={flecha}
                className={style.button_movil_atras}
                alt="atras"
              />
            </button>
          )}
        </Link>
      </header>

      

      <div className={style.parrafoAb}>
        <p ><span>Sobre la App Countries</span></p>

        <p>
          Este proyecto consiste en el desarrollo de una SPA (Single Page
          Application), en la cual utiliza datos de la API (restcountries) para
          luego almacenarlos en su propia base de datos. (#PostgreSQL). <br></br>Con el
          fin de permitirle al usuario tener disponible la información de todos
          los países y así poder llevar un registro de las actividades
          realizadas en cada uno. Es un prototipo planeado hacia una agenda de
          viajes.
          </p>

          <p>
            Características del proyecto:
            <li>Filtros (Por Continentes y Actividades). </li>
            <li>Ordenamiento (Alfabético, Cantidad de habitantes). </li>
            <li>Formulario controlado Para la Creación de Actividades. </li>
            <li>Búsqueda de país por nombre. </li>
            <li>Carta de detalle con la información por cada país.</li>
          </p>

          <p>
             Tecnologías empleadas:
            <li>Lenguaje: JavaScript.</li>
            <li>Data Base: PostgreSQL. </li>
            <li>Back-End: NodeJs, ExpressJs, Sequelize.</li> 
            <li>Front-End: React, Redux, CSS. </li>
            <li>Control de versiones: Git/GitHub.</li>
          </p>

          <p>
          1- Si te interesa el proyecto dale click en el ícono de GitHub.<br></br>
          2- Si deseas comunicarete con el desarrollador dale click en el ícono de Linkedin.
          </p>
      </div>
      <Footer/>
      </>
  );
}
