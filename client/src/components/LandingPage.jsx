import React from "react";
import { Link } from "react-router-dom";
import s from "./LandingPage.module.css";
import bg from "./imgs/x.png";


export const LandingPage = () => {
  return (
    <div className={s.compose}>
      <h1>Welcome to "DOGSAPP"</h1>
      <Link to="/home">
        <img src={bg} className={s.image} alt={'LogoHenry'}></img>
      </Link>
    </div>
  );
};