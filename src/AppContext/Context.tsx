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

type PokemonEvolutionType = {
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
  pokemonData: PokemonType;
  setPokemonData: React.Dispatch<React.SetStateAction<PokemonType>>;
  pokemonEvolutionData: any;
  setPokemonEvolutionData: React.Dispatch<React.SetStateAction<any>>;
};

const DEFAULT_VALUE = {
  pokemonData: {
    name: "",
    id: 0,
    order: 0,
    weight: 0,
    abilities: {
      ability: {
        name: "",
      },
    },
    sprites: {
      other: {
        dream_world: {
          front_default: "",
        },
      },
    },
    types: {
      type: {
        name: "",
      },
    },
  },
  setPokemonData: () => {},
};

const PokemonContext = createContext<PropsPokemonContext | []>([]);

const PokemonContextProvider: React.FC = ({ children }) => {
  const [pokemonData, setPokemonData] = useState<any | []>([]);
  const [pokemonEvolutionData, setPokemonEvolutionData] = useState<any | []>([]);

  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData, pokemonEvolutionData, setPokemonEvolutionData }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider };
export default PokemonContext;
