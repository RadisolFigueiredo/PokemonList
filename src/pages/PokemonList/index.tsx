import React from "react";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import PokemonContext from "../../AppContext/Context";

import Card from "../components/Card";
import Search from "../components/Search";

import * as S from "./styles";

const PokemonList: React.FC = () => {
  const { setPokemonEvolutionData, pokemonEvolutionData } = useContext<any>(PokemonContext);
  const history = useHistory();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [textInput, setTextInput] = useState("");

  const getAllPokemons = async () => {
    const result = [];
    try {
      const response = await api.get("pokemon?limit=151");
      for await (let y of response.data.results) {
        const pokemon = await getPokemonData(y.name);
        result.push(pokemon);
      }
      setLoading(false);
    } catch (err) {
      console.log("Erro", err);
    }
    setData(result);
  };

  const getPokemonData = async (name: string) => {
    const response = await api.get(`pokemon/${name}`);
    return response;
  };

  const getPokemonEvolution = async (id: number) => {
    try {
      const baseUrl = "https://pokeapi.co/api/v2/";
      const response = await api.get(`pokemon/${id}`);
      let replaceUrl = response.data.species.url.replace(baseUrl, "");
      const responsePokemonSpecieEvolution = await api.get(replaceUrl);
      replaceUrl = "";
      replaceUrl =
        responsePokemonSpecieEvolution.data.evolution_chain.url.replace(
          baseUrl,
          ""
        );
      const responseChainEvolution = await api.get(replaceUrl);
      setPokemonEvolutionData(responseChainEvolution.data);
      setLoading(false);
    } catch (err) {
      console.log("Erro", err);
    }
  };

  const handleClick = (id: number) => {
    getPokemonEvolution(id);
    history.push(`/evolution-chain/${id}`);
  };

  useEffect(() => {
    getAllPokemons();
  }, [pokemonEvolutionData]);

  return (
    <>
      <Search
        showSearch={true}
        showBackButton={false}
        onChange={(event: any) => {
          setTextInput(event.target.value);
        }}
      />
      <S.Container>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <S.ContainerCard>
            <S.BoxCards>
              {data
                .filter((value) => {
                  if (textInput === "") {
                    return value;
                  } else if (
                    value.data.name
                      .toLowerCase()
                      .includes(textInput.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((item, index) => (
                  <Card
                    onClick={() => handleClick(item.data.id)}
                    type={item.data.types[0].type.name}
                    key={index}
                    id={item.data.id}
                    name={item.data.name}
                    image={`${item.data.sprites.other.dream_world.front_default}`}
                    pokemonType={item.data.types[0].type.name}
                  />
                ))}
            </S.BoxCards>
          </S.ContainerCard>
        )}
      </S.Container>
    </>
  );
};

export default PokemonList;
