import React from "react";
import { PokemonContextProvider } from "./Context";


const GlobalContext: React.FC = ({ children }) => {
  return <PokemonContextProvider>{children}</PokemonContextProvider>;
};

export default GlobalContext;
