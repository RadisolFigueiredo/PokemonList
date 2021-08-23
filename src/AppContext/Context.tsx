import React, { createContext, useState } from "react";

type PokemonType = {
  name: string;
  id: number;
  order: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  };
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  };
};


type PropsPokemonContext = {
  pokemonEvolutionData: any;
  setPokemonEvolutionData: React.Dispatch<React.SetStateAction<any>>;
};

const PokemonContext = createContext<PropsPokemonContext | []>([]);

const PokemonContextProvider: React.FC = ({ children }) => {
  const [pokemonEvolutionData, setPokemonEvolutionData] = useState<any | []>([]);

  return (
    <PokemonContext.Provider value={{ pokemonEvolutionData, setPokemonEvolutionData }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider };
export default PokemonContext;
