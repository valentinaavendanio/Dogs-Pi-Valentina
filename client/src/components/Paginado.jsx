import React from "react";
import s from './Paginado.module.css';


export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumber = [];
  /*
   * Vamos a pushear al arreglo pageNumber, el número redondeado para arriba, del resultado de dividir todos los personajes por el número de personajes deseados.
   */
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }
  /*
   * Ahora si tengo 'pageNumber', mapeamos todos los números que contenga el arreglo.
   */
  return (
    <div>
    <nav className={s.pepe}>
      <ul>
        {pageNumber &&
          pageNumber.map(number => (
            <li key={number}
            className={s.paginado}>
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
    </div>
  );
}