import React from "react";
import Grid from "@material-ui/core/Grid";
import "./index.css";

const index = () => {
  return (
    <div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="img-section">
              <img
                alt="PokemonLogo"
                className="pokemon-logo"
                src={require("./../../asset/pokemon-logo.png")}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>
              <p>To view pokemons list, go to POKEDEX menu</p>
              <p>To view your pokemon, go to MY POKEMON menu</p>
              <p>PokeAPI Mini Project by Reggie Gunawan</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default index;
