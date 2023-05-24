import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/Navbar";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  allCountries,
  clear,
  sort,
  sorNumerico,
  sortContinent,
  sortActivity,
} from "../../Redux/actions";
import style from "./Home.module.css";
import Paginacion from "../Paginacion/Paginacion";
import useWindowDimensions from "../Hook/useWindowsDimensions";

function Home() {
  const { countries, allActivity } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCountries());
    dispatch(clear());
  }, [dispatch]);

  
  const filtroActivity = allActivity.filter((c) => {
    return c.activities[0] !== undefined;
  });
  
  const arrayActivity = filtroActivity.map((c) => c.activities[0]["name"]);
  
  const arrayActivity1 = arrayActivity.filter((item, index) => {
    return arrayActivity.indexOf(item) === index;
  });
  

  //==========> Paginacion <==========
  const [pag, setPag] = useState(1);
  const { width } = useWindowDimensions();
  const movil = 460;
  const [countriesPag] = useState(width > movil ? 12 : 4);
  let [input, setInput] = useState(1);
  let datos = countries === "No se encontro el pais" ? "0" : countries;
  const max = Math.ceil(
    datos?.length ? datos.length / countriesPag : datos.length / countriesPag
  );

  function handleSelectAlfabetico(e) {
    e.preventDefault();
    dispatch(sort(e.target.value));
    setInput((input = 1));
    setPag(1);
  }
  function handleSelectPopulation(e) {
    e.preventDefault();
    dispatch(sorNumerico(e.target.value));
    setInput((input = 1));
    setPag(1);
  }
  function handleSelectContinent(e) {
    dispatch(sortContinent(e.target.value));
    setInput((input = 1));
    setPag(1);
  }
  function handleSelectActivity(e) {
    dispatch(sortActivity(e.target.value));
    setInput((input = 1));
    setPag(1);
  }

  return (
    <div className={style.imagen}>
      <NavBar setInput={setInput} setPag={setPag} />
      <nav className={style.opciones}>
        <select
          className={style.orden}
          onChange={(e) => handleSelectAlfabetico(e)}
        >
          <option>ORDEN</option>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>
        <select
          className={style.poblacion}
          onChange={(e) => handleSelectPopulation(e)}
        >
          <option>POBLACION</option>
          <option value="asc">Menor población</option>
          <option value="des">Mayor población</option>
        </select>
        <select
          className={style.poblacion}
          onChange={(e) => handleSelectContinent(e)}
        >
          <option>CONTINENTE</option>
          <option value="todos">Todos los continentes</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select
          className={style.actividad}
          onChange={(e) => handleSelectActivity(e)}
        >
          <option>ACTIVIDAD</option>
          {arrayActivity1?.map((item) => {
            return (
              <option value={item} key={Math.random()}>
                {item}
              </option>
            );
          })}
        </select>
      </nav>

      <Paginacion
        pag={pag}
        setPag={setPag}
        max={max}
        input={input}
        setInput={setInput}
      />
      <div className={style.cardContent}>
        {!countries.length ? (
          <div className={style.loading}>
            <div class={style.loadingSpiner}></div>
                <p>Cargando información...</p>
          </div>
        ) : countries === "No se encontro el pais" ? (
          <h1 className={style.search}>
            ! Ups no encontramos el Pais 😢!
            <br />
            Por favor vuelve a intentar
          </h1>
        ) : (
          countries
            .slice(
              (pag - 1) * countriesPag,
              (pag - 1) * countriesPag + countriesPag
            )
            .map((country) => {
              return (
                <div>
                  <Card
                    flags={country.flags}
                    name={country.name}
                    continents={country.continents}
                    key={country.id}
                    id={country.id}
                    activities={country.activities}
                  />
                </div>
              );
            })
        )}
      </div>
    </div>
  );
}

export default Home;