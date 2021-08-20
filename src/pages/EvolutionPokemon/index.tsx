import React, { useContext, useEffect, useState } from "react";

import PokemonContext from "../../AppContext/Context";
import Card from "../components/Card";

import * as S from "./styles";
import api from "../../services/api";
import Search from "../components/Search";

type PokemonType = {
  name: string;
  id: any;
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
        front_default: any;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  };
};

const EvolutionPokemon: React.FC = () => {
  const { pokemonData, pokemonEvolutionData } = useContext<any>(PokemonContext);
  const [firstEvolutionDetail, setFirstEvolutionDetail] =
    useState<PokemonType>();
  const [secondEvolutionDetail, setSecondEvolutionDetail] =
    useState<PokemonType>();

  const firstEvolution =
    pokemonEvolutionData?.chain?.evolves_to[0]?.species?.name;

  const secondEvolution =
    pokemonEvolutionData?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name;

  const getImageFirstEvolution = async (name: string) => {
    const response = await api.get(`pokemon/${name}`);
    setFirstEvolutionDetail(response.data);
  };

  const getImageSecondEvolution = async (name: string) => {
    const response = await api.get(`pokemon/${name}`);
    setSecondEvolutionDetail(response.data);
  };

  useEffect(() => {
    getImageFirstEvolution(firstEvolution);
    getImageSecondEvolution(secondEvolution);
  }, [secondEvolution]);

  return (
    <>
      <Search showSearch={false}/>
      <S.Container>
        <Card
          id={pokemonData.id}
          image={pokemonData.sprites.other.dream_world.front_default}
          name={pokemonData.name}
          pokemonType={pokemonData.types[0].type.name}
          type={pokemonData.types[0].type.name}
        />
        {firstEvolution && (
          <Card
            id={firstEvolutionDetail?.id}
            image={
              firstEvolutionDetail?.sprites.other.dream_world.front_default
            }
            name={firstEvolution}
            pokemonType={pokemonData.types[0].type.name}
            type={pokemonData.types[0].type.name}
          />
        )}
        {secondEvolution && (
          <Card
            id={secondEvolutionDetail?.id}
            image={
              secondEvolutionDetail?.sprites.other.dream_world.front_default
            }
            name={secondEvolution}
            pokemonType={pokemonData.types[0].type.name}
            type={pokemonData.types[0].type.name}
          />
        )}
      </S.Container>
    </>
  );
};

export default EvolutionPokemon;
