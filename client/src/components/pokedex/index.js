import React, { useState, useEffect } from "react";
import PokemonCard from "./pokemon-card/card";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "./../utils/get-pokemons";
import Grid from "@material-ui/core/Grid";
import "./index.css";

const index = () => {
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 200 },
  });

  const [ownedPokemons, setOwnedPokemons] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("myPokemon")) {
      setOwnedPokemons(JSON.parse(localStorage.getItem("myPokemon")).length);
    }
  }, []);

  if (data === undefined) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <div className="container">
        <div className="title-section">
          <h2>POKEDEX</h2>
          <h3>Owned Pokemon: {ownedPokemons}</h3>
        </div>
        <div style={{ margin: 50 }}>
          <Grid container spacing={4}>
            {data.pokemons.map((pokemon) => (
              <Grid item xs={4} key={pokemon.number}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default index;
