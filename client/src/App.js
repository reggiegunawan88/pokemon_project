import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Nav from "./components/utils/nav/nav";
import Home from "./components/home/index";
import PokemonDetail from "./components/pokemon_detail/index";
import Pokedex from "./components/pokedex/index";
import MyPokemon from "./components/my_pokemon/index";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/pokedex" exact component={Pokedex} />
              <Route path="/pokedex/:name" component={PokemonDetail} />
              <Route path="/mypokemon" component={MyPokemon} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
