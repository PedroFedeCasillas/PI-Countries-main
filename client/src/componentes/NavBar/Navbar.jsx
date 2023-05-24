import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import logo from './logoHome1.png'
import style from './Navbar.module.css'
import useWindowDimensions from "../Hook/useWindowsDimensions";

function Navbar({setInput, setPag}) {
    
    const { width } = useWindowDimensions();
    const movil = 460;
    if(width>movil){
        return (
            <nav className={style.contenedor}>
                
                <Link to='/' >
                <img  className={style.logo} src={logo}alt="logo"/>
                </Link>
                
                <Search setInput={setInput} setPag={setPag}/>
                
                <Link to='/activity' className={style.textCreate}>
                    <button className={style.nuevaActividad} >NUEVA ACTIVIDAD</button>
                </Link>
               
                <Link to="/about" className={style.NavAbout}>
                <h3>ABOUT</h3>
                </Link>
                
            </nav>
        )
    } else {
        return (
            <nav className={style.contenedorMovil}>
              
                <Link to='/' className={style.home}>
                <h3>Home</h3>
                </Link>
                
                <Link to="/about" className={style.NavAboutMovil}>
                <h3>ABOUT</h3>
                </Link>
                
                <Link to='/activity' className={style.textCreate}>
                    <h3 className={style.nuevaActividad} >NUEVA ACTIVIDAD</h3>
                </Link>
                
                <div className={style.search}>
                <Search setInput={setInput} setPag={setPag}/>
                </div>
            </nav>
        )
    }
    
}

export default Navbar;