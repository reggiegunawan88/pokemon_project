import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <nav>
      <Link to="/">
        <img
          alt="Pokemon Logo"
          className="img-logo"
          src={require("./../../../asset/pokemon-logo-simple.png")}
        />
      </Link>
      <ul className="nav-links">
        <Link className="nav-style" to="/pokedex">
          <li>
            <b>POKEDEX</b>
          </li>
        </Link>
        <Link className="nav-style" to="/mypokemon">
          <li>
            <b>MY POKEMON</b>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default nav;
