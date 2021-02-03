import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const nav = () => {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <Link to="/">
        <img
          className="img-logo"
          src={require("./../../../asset/pokemon-logo-simple.png")}
        />
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="pokedex">
          <li>
            <b>POKEDEX</b>
          </li>
        </Link>
        <Link style={navStyle} to="mypokemon">
          <li>
            <b>MY POKEMON</b>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default nav;
