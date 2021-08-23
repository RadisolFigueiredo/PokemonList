import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  margin-bottom: 50px;
  flex-direction: row;
  display: flex;
  background-color: red;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
`;

export const BoxImage = styled.div`
  display: flex;
  align-content: center;
  height: 100%;
  padding: 0 30px;
  width: 70%;
  margin: auto 0;
`;

export const Image = styled.img`
  width: 200px;
  height: 80px;
  cursor: pointer;
`;
  
export const Title = styled.h1`
  display: flex;
  height: 100%;
`;

export const BoxSearch = styled.div`
  margin: auto 0;
  width: 250px;
`;

export const Search = styled.input`
  height: 20px;
  width: 90%;
  height: 30px;
  font-size: 16px;
  margin-right: 30px;
`;

export const BackButton = styled(Link)`
  margin: auto 0;
`;