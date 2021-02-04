import React from "react";
import "./index.css";

const index = () => {
  return (
    <div>
      <div className="container">
        <div className="img-section">
          <img
            alt="PokemonLogo"
            className="pokemon-logo"
            src={require("./../../asset/pokemon-logo.png")}
          />
        </div>
        <div style={{ fontSize: 18, fontWeight: "bold" }}>
          <p>To view pokemon list, go to POKEDEX menu</p>
          <p>To view your pokemon, go to MY POKEMON menu</p>
          <p>PokeAPI Project by Reggie Gunawan</p>
        </div>
      </div>
    </div>
  );
};

export default index;
