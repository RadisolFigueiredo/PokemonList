import React from "react";

import * as S from "./styles";

interface DataProps {
  id: number;
  name: string;
  image: string;
  pokemonType?: string;
  onClick?: any;
  type: string;
}

const Card: React.FC<DataProps> = ({id, image, name, pokemonType, onClick, type}) => {
  return (
    <S.Cards onClick={onClick} type={type}>
      <S.BoxTextId>
        <S.TextId># {id}</S.TextId>
      </S.BoxTextId>
      <S.BoxImage>
        <S.Image src={image} />
      </S.BoxImage>
      <S.AlignColumn>
        <S.BoxName>
          <S.Name>{name}</S.Name>
        </S.BoxName>
        <S.BoxTextType>
          <S.TextType>Tipo: {pokemonType}</S.TextType>
        </S.BoxTextType>
      </S.AlignColumn>
    </S.Cards>
  );
};

export default Card;
