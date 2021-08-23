import React from "react";

import logo from "../../../assets/logo.png";
import * as S from "./styles";

interface DataProps {
  onChange?: any;
  showSearch?: boolean;
  showBackButton: boolean;
  onClick?: Function;
}

const Search: React.FC<DataProps> = ({
  onChange,
  showSearch,
  showBackButton,
  onClick,
}) => {
  const goBack = () => (window.history.back());

  return (
    <S.Container>
      <S.Box>
        <S.BoxImage>
          <div onClick={() => goBack()}>
            <S.Image src={logo} />
          </div>
        </S.BoxImage>
        {showBackButton && (
          <S.BackButton onClick={() => goBack()}>
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
