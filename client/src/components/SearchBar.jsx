import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../actions";
import s from './Nav.module.css'



export const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  //
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name));
    setName(' ')
  }
  //
  return (
    <div className={s.conteiner}>
      <input
        className={s.input}
        value={name}
        type="text"
        placeholder="Search Dog"
        onChange={(e) => handleInputChange(e)}
      />
      <button
      className={s.btn} 
      class btn btn-pink
      type="submit"
      onClick={(e) => handleSubmit(e)}
      
      >Search</button> 
    </div>
  );
}