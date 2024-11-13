import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

const DashBoardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #e7e7e7;
`;

const DashTitle = styled.h1`
  text-align: center;
  padding: 30px 0;
  font-size: 30px;
  font-weight: 900;
  color: red;
`;

const DashBoardList = styled.ul`
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #e7e7e7;
  flex-wrap: nowrap;
`;

const DashInfo = styled.li`
  width: 10%;
  padding: 1%;
  margin: 1%;
  text-align: center;
  border: 3px dotted #ccc;
  border-radius: 10px;
  background-color: #fff;
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
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const DashBoardExample = styled.img`
  width: 100%;
`;

const DexImage = styled.div`
  padding-top: 20px;
`;

const DexTitle = styled.div`
  padding-top: 20px;
  font-weight: 700;
`;

const DexNumber = styled.div`
  padding-top: 20px;
  color: #888;
`;

const AddButton = styled.div`
  padding-top: 30px;
`;

const DEFAULT_POKEMON_BALL = 6;
/** Dashboard */
const Dashboard = () => {
  const { dashPokemon, setDashPokemon } = useContext(PokemonContext);
  console.log(dashPokemon);
  const empty_balls = DEFAULT_POKEMON_BALL - dashPokemon.length;
  return (
    <DashBoardWrap>
      <DashTitle>My Pokemon</DashTitle>
      <DashBoardList>
        {dashPokemon.map((pokemon) => (
          <PokemonInfo key={pokemon.id}>
            <Link to={`/pokeDexNo/${pokemon.id}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          </PokemonInfo>
        ))}
        {Array(empty_balls)
          .fill(null)
          .map((_, index) => (
            <DashInfo key={index}>
              <DashBoardExample src="myBall.png" alt="포켓몬스터_볼_이미지" />
            </DashInfo>
          ))}
      </DashBoardList>
    </DashBoardWrap>
  );
};

export default Dashboard;
