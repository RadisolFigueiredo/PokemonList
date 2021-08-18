import styled from 'styled-components';

export const Cards = styled.div`
  border: 1px solid red;
  height: 300px;
  width: 200px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const BoxTextId= styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 5px 20px 0;
`;

export const TextId = styled.small`
  font-size: 12px;
  font-weight: bold;
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

export const AlignColumn = styled.div`

`;

export const BoxName = styled(BoxImage)`
  display: flex;
  justify-content: center;
`;

export const Name = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  margin: 20px 0 10px;
`;

export const BoxTextType = styled(BoxName)``;

export const TextType = styled.p`
  font-size: 12px;
  text-transform: capitalize;
  margin: 0 auto;
`;
