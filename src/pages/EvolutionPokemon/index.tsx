import React, { useContext, useEffect, useState } from "react";

import PokemonContext from "../../AppContext/Context";
import Card from "../components/Card";

import * as S from "./styles";
import api from "../../services/api";
import Search from "../components/Search";

interface NameEvolution {
  name: [] | string;
}

const EvolutionPokemon: React.FC = () => {
  const { pokemonEvolutionData } = useContext<any>(PokemonContext);

  const [evolutionsData, setEvolutionsData] = useState<any | []>([]);
  const [evolutions, setEvolutions] = useState<any | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const allPokemonEvolutions = () => {
    const data = [];
    const firstEvolution = pokemonEvolutionData?.chain?.species?.name;
    data.push(firstEvolution);
    if (
      pokemonEvolutionData?.chain?.hasOwnProperty("evolves_to") &&
      pokemonEvolutionData?.chain?.evolves_to[0]?.evolves_to?.length > 0
    ) {
      const secondEvolution =
        pokemonEvolutionData?.chain?.evolves_to[0]?.species?.name;
      data.push(secondEvolution);
    }
    if (
      pokemonEvolutionData?.chain?.evolves_to[0]?.hasOwnProperty(
        "evolves_to"
      ) &&
      pokemonEvolutionData?.chain?.evolves_to[0]?.evolves_to?.length > 0
    ) {
      const thirdEvolution =
        pokemonEvolutionData?.chain?.evolves_to[0]?.evolves_to[0]?.species
          ?.name;
      data.push(thirdEvolution);
    }
    setEvolutions(data);
  };

  useEffect(() => {
    allPokemonEvolutions();
  }, []);

  const dataAllpokemonEvolutions = async () => {
    const result = [];
    try {
      for await (let y of evolutions) {
        const pokemonAllData = await api.get<NameEvolution>(`pokemon/${y}`);
        result.push(pokemonAllData.data);
      }
    } catch (err) {
      console.log("Erro", err);
    }
    setEvolutionsData(result);
  };

  useEffect(() => {
    dataAllpokemonEvolutions();
  }, [evolutions]);

  useEffect(() => {
    if (evolutionsData.length > 0) {
      setLoading(false);
    }
  }, [evolutionsData]);

  return (
    <>
      <Search showSearch={false} showBackButton={true} />
      <S.Container>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <>
            {evolutionsData.map(
              (item: {
                id: number;
                sprites: {
                  other: { dream_world: { front_default: string | undefined } };
                };
                name: string;
                types: { type: { name: string | undefined } }[];
              }) => (
                <Card
                  id={item.id}
                  key={item.id}
                  image={item.sprites.other.dream_world.front_default}
                  name={item.name}
                  pokemonType={item.types[0].type.name}
                  type={item.types[0].type.name}
                />
              )
            )}
          </>
        )}
      </S.Container>
    </>
  );
};

export default EvolutionPokemon;
