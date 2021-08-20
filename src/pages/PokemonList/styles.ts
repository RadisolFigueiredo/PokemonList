import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const ContainerCard = styled.div`
  width: 80%;
  max-width: 80%;
`;

export const BoxCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: row;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
