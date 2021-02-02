import React from "react";
import "./index.css";

const index = () => {
  return (
    <div>
      <div className="container">
        <div className="img-section">
          <img
            className="pokemon-logo"
            src={require("./../../asset/pokemon-logo.png")}
          />
        </div>
        <div>
          <p>To view pokemon list, go to POKEDEX menu</p>
          <p>To view your pokemon, go to MY POKEMON menu</p>
        </div>
      </div>
    </div>
  );
};

export default index;
