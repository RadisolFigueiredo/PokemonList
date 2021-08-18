import React, { useState, useEffect } from "react";
import api from "../services/api";
import Card from "./components/Card";
import Search from "./components/Search";
import * as S from "./styles";
interface DataProps {
  name: string;
}

const PokemonList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [nameFiltered, setNameFiltered] = useState('');
  const [textInput, setTextInput] = useState('');


  const getAllPokemons = async () => {
    const x = [];
    try {
      const response = await api.get("pokemon?limit=151");
      // setData(response.data.results);
      for await (let y of response.data.results) {
        const pokemon = await getPokemonData(y.name);
        x.push(pokemon);
      }
      setLoading(false);
    } catch (err) {
      console.log("Erro", err);
    }
    setData(x);
  };

  const getPokemonData = async (name: string) => {
    const response = await api.get(`pokemon/${name}`);
    return response;
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  console.log(data);
  
  return (
    <>
      <Search onChange={(event: any) => {setTextInput(event.target.value)}} title={'Pokemon'}/>
      <S.Container>
        {loading ? (
          <h1>Carregando...</h1>
        ) : (
          <S.ContainerCard>
            <S.BoxCards>
              {data.filter(value => {
                if(textInput === '') {
                  return value
                } else if (value.data.name.toLowerCase().includes(textInput.toLowerCase())){
                  return value
                }
              }).map((item, index) => (
                <Card
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
