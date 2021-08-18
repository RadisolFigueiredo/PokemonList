import React from "react";
import * as S from "./styles";

interface DataProps {
  onChange: any;
  title: string;
}

const Search: React.FC<DataProps> = ({onChange, title}) => {
  return (
    <S.Container>
      <S.Box>
        <S.BoxTitle>
          <h1>{title}</h1>
        </S.BoxTitle>
        <S.BoxSearch>
          <S.Search type="text" placeholder="Digite o nome do pokemon" onChange={onChange}/>
        </S.BoxSearch>
      </S.Box>
    </S.Container>
  );
};

export default Search;
