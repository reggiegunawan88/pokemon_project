import React, { useState, useEffect } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import MyPokemonCard from "./card/my-pokemon";

const index = () => {
  const [pokemons, setPokemons] = useState([]);

  /* get user's pokemons data from browser local storage */
  const getStoredData = () => {
    if (localStorage.getItem("myPokemon")) {
      setPokemons(JSON.parse(localStorage.getItem("myPokemon")));
    }
  };

  useEffect(() => {
    getStoredData();
  }, []);

  const renderCard = () => {
    return (
      <Grid container spacing={4}>
        {pokemons.map((pokemon) => (
          <Grid className="fade-in" item xs={4} key={pokemon.number}>
            <MyPokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="title-section">
          <h2>MY POKEMONS</h2>
        </div>
        <div style={{ margin: 50 }}>
          {/* conditional rendering */}
          {pokemons.length > 0 ? (
            renderCard()
          ) : (
            <h3>
              You have no pokemon right now. <br /> Try to catch some on
              Pokedex!
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
