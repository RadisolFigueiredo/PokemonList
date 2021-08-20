import styled from "styled-components";

const handleColorType = (type: string) => {
  switch (type) {
    case 'bug':
      return '#8CB230';
    case 'dark':
      return '#58575F';
    case 'dragon':
      return '#0F6AC0';
    case 'electric':
      return '#EED535';
    case 'fairy':
      return '#ED6EC7';
    case 'fighting':
      return '#D04164';
    case 'fire':
      return '#FD7D24';
    case 'flying':
      return '#748FC9';
    case 'ghost':
      return '#556AAE';
    case 'grass':
      return '#62B957';
    case 'ground':
      return '#DD7748';
    case 'ice':
      return '#61CEC0';
    case 'normal':
      return '#9DA0AA';
    case 'poison':
      return '#A552CC';
    case 'psychic':
      return '#EA5D60';
    case 'rock':
      return '#BAAB82';
    case 'steel':
      return '#417D9A';
    case 'water':
      return '#4A90DA';
    default:
      return '#fff';
  }
};                          

interface Props {
  type: string;
}

export const Cards = styled.div<Props>`
  height: 300px;
  width: 200px;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: ${({type}) => handleColorType(type)};
  cursor: pointer;
`;

export const BoxTextId = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 5px 20px 0;
`;

export const TextId = styled.small`
  font-size: 12px;
  font-weight: bold;
  color: black;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  flex: 1;
`;

export const AlignColumn = styled.div``;

export const BoxName = styled(BoxImage)`
  display: flex;
  justify-content: center;
`;

export const Name = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  margin: 20px 0 10px;
  color: black;
`;

export const BoxTextType = styled(BoxName)``;

export const TextType = styled.p`
  font-size: 12px;
  text-transform: capitalize;
  margin: 0 auto;
  color: black;
`;
