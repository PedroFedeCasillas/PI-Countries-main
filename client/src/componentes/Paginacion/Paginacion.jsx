import React from "react";
import style from "./Paginacion.module.css";
import arrowBack from "./arrow-back.png";
import arrowForward from "./arrowForward.png";

function Paginacion({ pag, setPag, max, input, setInput }) {
  const nextPage = () => {
    if (input + 1 <= max) {
      setInput(input + 1);
      setPag(pag + 1);
    }
  };

  const prevPage = () => {
    if (input - 1 >= 1) {
      setInput(input - 1);
      setPag(pag - 1);
    }
  };

  const handlePagination = (e) => {
    const pageNumber = parseInt(e.target.value, 10);
    if (pageNumber >= 1 && pageNumber <= max) {
      setInput(pageNumber);
      setPag(pageNumber);
    } else {
      alert(`El número de página debe ser mayor o igual a 1 y menor o igual a ${max}`);
    }
  };

  return (
    <div className={style.container}>
      {input === 1 ? (
        <span className={style.hiddenButton}></span>
      ) : (
        <button className={style.buttonAnterior} onClick={prevPage}>
          <img src={arrowBack} className={style.iconBack} alt="button back" />
        </button>
      )}
      <input
        className={style.inputNumber}
        min="1"
        max={max}
        name="pag"
        autoComplete="off"
        value={input}
        onChange={handlePagination}
      />
      <button className={style.pageNumber}>de {max}</button>
      {input === max ? (
        <div className={style.hiddenButtonAdelante}></div>
      ) : (
        <button className={style.buttonSiguiente} onClick={nextPage}>
          <img src={arrowForward} className={style.iconForward} alt="button forward" />
        </button>
      )}
    </div>
  );
}

export default Paginacion;

