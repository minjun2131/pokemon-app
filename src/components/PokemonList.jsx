import styled from "styled-components";
import PokemonCard from "./PokemonCard.jsx";
import { useState } from "react";
import MOCK_DATA from "../mok-data/MokData";
import { Link } from "react-router-dom";

const ListWrap = styled.ul`
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #e7e7e7;
`;

const PokemonInfo = styled.li`
  width: 10%;
  padding: 1%;
  margin: 1%;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 1px 2px 8px #aaa;
  text-decoration-line: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState(MOCK_DATA);

  return (
    <ListWrap>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonInfo key={pokemon.id}>
            <Link to={`/pokeDexNo/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} toggleDefault={true} />
            </Link>
          </PokemonInfo>
        );
      })}
    </ListWrap>
  );
};

export default PokemonList;
