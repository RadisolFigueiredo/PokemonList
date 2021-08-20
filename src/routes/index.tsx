import React from "react";
import { Route, Switch } from "react-router-dom";

import EvolutionPokemon from "../pages/EvolutionPokemon";
import PokemonList from "../pages/PokemonList";



const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={PokemonList} />
      <Route path="/evolution-chain/:id" exact component={EvolutionPokemon} />
    </Switch>
  );
};

export default Routes;
