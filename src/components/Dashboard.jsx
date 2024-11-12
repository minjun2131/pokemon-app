import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";

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
const Dashboard = ({ dashPokemon, setDashPokemon }) => {
  // 원래는 6개의 포켓몬 볼 이미지가 있다.
  // 그런데 dashPokemon에 데이터가 추가되면 포켓몬 볼 이미지는 줄어든다. ex) 볼 이미지: 6 - 2 = 4
  const empty_balls = DEFAULT_POKEMON_BALL - dashPokemon.length;
  // let dashedArray = Array(6 - dashPokemon.length).fill(null);
  console.log(dashPokemon);
  return (
    <DashBoardWrap>
      <DashTitle>My Pokemon</DashTitle>
      <DashBoardList>
        {/* dashPokemon 보여주기 따로따로 dashPokemon은 보여주고 어차피 li태그는 ul안에 있어서 붙을거니까 empty_balls를 배열화 시켜서 빈 볼이면 볼 나오게 출력*/}
        {dashPokemon.map((pokemon) => (
          <PokemonInfo key={pokemon.id}>
            <Link to={`/pokeDexNo/${pokemon.id}`}>
              <PokemonCard
                pokemon={pokemon}
                dashPokemon={dashPokemon}
                setDashPokemon={setDashPokemon}
              />
            </Link>
          </PokemonInfo>
        ))}
        {/* 포켓몬 볼 보여주기 */}
        {Array(empty_balls)
          .fill(null)
          .map((_, index) => (
            <DashInfo key={index}>
              <DashBoardExample src="myBall.png" alt="포켓몬스터_볼_이미지" />
            </DashInfo>
          ))}

        {/* 포켓몬 볼 보여주기 아래는 로컬스토리지 없이 사용했을 때
        {Array(empty_balls)
          .fill(null)
          .map((_, index) => (
            <DashInfo key={index}>
              <DashBoardExample src="myBall.png" alt="포켓몬스터_볼_이미지" />
            </DashInfo>
          ))} */}

        {/* {dashedArray.map((dashed, index) => (
            <DashInfo key={index}>
              {dashed === null || dashed === Array ? (
                <DashBoardExample src="myBall.png" alt="포켓몬스터_볼_이미지" />
              ) : (
                <>
                  <DexImage>
                    <img src={dashed.img_url} alt={dashed.korean_name} />
                  </DexImage>
                  <DexTitle>{dashed.korean_name}</DexTitle>
                  <DexNumber>
                    No. {String(dashed.id).padStart(3, "0")}
                  </DexNumber>
                  <AddButton>
                    <button>삭제</button>
                  </AddButton>
                </>
              )}
            </DashInfo> 
          ))} */}
        {/* <DashBoardExample src="myBall.png" alt="포켓몬스터_볼_이미지" /> */}
        {/* <DashInfo key={dashed.id}>{dashed.img_url}</DashInfo> */}
      </DashBoardList>
    </DashBoardWrap>
  );
};

export default Dashboard;
