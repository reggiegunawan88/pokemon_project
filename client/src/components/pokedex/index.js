import React, { useState, useEffect } from "react";
import PokemonCard from "./pokemon-card/card";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { GET_POKEMONS } from "./../utils/get-pokemons";

const index = () => {
  const { data } = useQuery(GET_POKEMONS, {
    variables: { first: 500 },
  });
  console.log(data);

  if (data == undefined) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <div className="container">
        <div className="title-section">
          <h2>POKEDEX</h2>
          <h3>Owned Pokemon: 0</h3>
        </div>
        <div className="group-cards">
          <div className="row">
            {data.pokemons.map((pokemon) => (
              <div className="col-4" key={pokemon.number}>
                <PokemonCard pokemon={pokemon} />
                {/* <p>{pokemon.number}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
