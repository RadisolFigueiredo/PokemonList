import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import * as S from "./styles";

interface DataProps {
  onChange?: any;
  showSearch?: boolean;
  showBackButton: boolean;
}

const Search: React.FC<DataProps> = ({ onChange, showSearch , showBackButton}) => {
  return (
    <S.Container>
      <S.Box>
        <S.BoxImage>
          <Link to="/">
            <S.Image src={logo} />
          </Link>
        </S.BoxImage>
        {showBackButton && (
          <S.BackButton to="/">
            <p>Voltar</p>
          </S.BackButton>
        )}
        {showSearch && (
          <S.BoxSearch>
            <S.Search
              type="text"
              placeholder="Digite o nome do pokemon"
              onChange={onChange}
            />
          </S.BoxSearch>
        )}
      </S.Box>
    </S.Container>
  );
};

export default Search;
