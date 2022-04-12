import React from "react";
import s from "./Nav.module.css";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Nav = () => {
  return (
    <div className={s.nav}>
        <div className={s.contenedor}>
            <Link className={s.link}
            to="/home">
            <h1 className={s.name}>DOGSAPP</h1>
        </Link>
            <Link to="/dog" className={s.link}>
            
                <h2 className={s.create}>Create Dog</h2>
            </Link>
    
        
        <div className={s.buscador}>
            <SearchBar />
        </div>
        </div>
      
    </div>
  );
};

export default Nav;