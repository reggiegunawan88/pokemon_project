import React, { useState, useEffect } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import MyPokemonCard from "./card/my-pokemon";

const index = () => {
  const [pokemons, setPokemons] = useState([]);

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
        {/* {data.pokemons.map((pokemon) => (
          <Grid item xs={4} key={pokemon.number}>
            <MyPokemonCard pokemon={pokemon} />
          </Grid>
        ))} */}
      </Grid>
    );
  };

  return (
    <div>
      <div className="title-section">
        <h2>MY POKEMON</h2>
      </div>
      <div style={{ margin: 50 }}>
        {pokemons.length > 0 ? (
          <h3>You have pokemons!</h3>
        ) : (
          <h3>
            You have no pokemon right now. <br /> Try to catch some on Pokedex!
          </h3>
        )}
      </div>
    </div>
  );
};

export default index;
