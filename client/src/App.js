import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/index";
import PokemonDetail from "./components/pokemon_detail/index";
import Pokedex from "./components/pokemon_list/index";
import MyPokemon from "./components/my_pokemon/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/pokedex:id" component={PokemonDetail} />
            <Route path="/mypokemon" component={MyPokemon} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
