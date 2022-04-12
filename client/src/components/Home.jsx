import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  filterByValue,
  filterByTemperament,
  filterCreated,
  getTemperaments,
} from "../actions";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { Nav } from "./Nav";
import Paginado from "./Paginado.jsx";
import s from "./Home.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //logra que se me una el indexoflastdog y el indexoffirstdog
  const temperaments = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const [orden, setOrden] = useState("");
  const [dogsPerPage, setDogsPage] = useState(8);
  
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  //lo que hago con slice es pasar cortar lo que necesito, desde, hasta. En este caso del perro 0 al perro 8.



  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber); //estado inicial, seria cada pagina
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
    setCurrentPage(1);
  }

  function handleFilterValue(e) {
    e.preventDefault();
    dispatch(filterByValue(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  const handleFilterTemperament = (e) => {
    console.log(e.target.value);
    dispatch(filterByTemperament(e.target.value));
    setCurrentPage(1);
  };

  function handleFrom(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  }

  return (
    <div className={s.containerPhader}>
      <div>
        <Nav />
      </div>
      <div>{/* <h1>Henry Dogs!</h1> */}</div>

      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload the list!
      </button>

      {/* <SearchBar /> */}

      <div className={s.variosSele}>
        <select className={s.sele} onChange={(e) => handleFilterValue(e)}>
          <option value="AZ">Order A-Z</option>
          <option value="ZA">Order Z-A</option>
          <option value="LESS">Order less weight</option>
          <option value="HIGH">Order higher weight</option>
        </select>

        <select className={s.sele} onChange={(e) => handleFrom(e)}>
          <option value="ALL">All</option>
          <option value="CREATED">Created</option>
          <option value="API">API</option>
        </select>

        <select className={s.sele} onChange={(e) => handleFilterTemperament(e)}>
          <option value="all">Todos</option>
          {temperaments?.map((elem) => (
            <option value={elem.name} key={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>
      </div>


      <div className={s.containerCards}>
        {currentDogs &&
          currentDogs.map((el) => {
            return (
              <Link to={"/dogs/" + el.id} key = {el.id}>
                <Card
                  name={el.name}
                  img={el.img ? el.img : el.image}
                  temperament={el.temperament}
                  temperaments={el.temperaments}
                  id={el.id}
                  className={s.cardiana}
                />
              </Link>
            );
          })}
      </div>
          <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />
    </div>
  );
};