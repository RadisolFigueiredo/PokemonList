import React, {useState, useEffect} from "react";
import api from '../../services/api';

interface DataProps {
  name: string;
}

const PokemonList = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [dataDetails, setDataDetails] = useState([]);


  const getAllPokemons = async () => {
    const response = await api.get('pokemon?limit=151')
  }
  useEffect(() => {
    api.get('pokemon?limit=151')
      .then(
        (response) => {
          setData(response.data.results);
        }
      )
      .catch(err => console.log('Erro', err))
  }, []);

  const hancleClick = (name: string) => {
    api.get(`pokemon/${name}`)
    .then(
      (response) => {
        
        // console.log(response);
        setDataDetails(response.data);
      }
    )
    .catch(err => console.log('Erro', err))  
  }

  console.log(data);

  return (
    <div>
      <ul>
      {data.map((item, index) => (
        <li key={index}>
          <a onClick={() => hancleClick(item.name)}>
          {item?.name}
        </a>
        </li>
      ))}
      </ul>
    </div>);
};

export default PokemonList;
