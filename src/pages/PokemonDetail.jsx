import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mok-data/MokData";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DetailWrap = styled.section`
  width: 100%;
`;
const DetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DetailParam = styled.div`
  padding-top: 20px;
`;

const DetailButton = styled.button`
  margin-right: 10px;
`;

const PokemonDetail = ({ dashPokemon, setDashPokemon }) => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    setPokemonData(MOCK_DATA.find((pokemon) => pokemon.id === Number(id)));
  }, [id]);
  const backSpace = () => {
    navigation(-1);
  };
  // 굳이 확인할 필요없이 로컬스토리지의 값을 확인해서 버튼 온오프 해주기

  // 지금 페이지 들어왔을 때 이 값이 있는지 없는지를 먼저 확인해야 함

  const pokeData = JSON.parse(localStorage.getItem("ChoosePokemon"));
  const chooseToggle =
    pokeData && pokeData.some((check) => check.id === Number(id));
  const handleDash = () => {
    if (pokeData.length > 5) {
      MySwal.fire({
        icon: "warning",
        title: "중복",
        text: "이미 등록된 포켓몬이 존재합니다.",
        showCancelButton: false,
      });
      return;
    }
    localStorage.setItem(
      "ChoosePokemon",
      JSON.stringify([...dashPokemon, pokemonData])
    );
    setDashPokemon([...dashPokemon, pokemonData]);
  };

  const deleteDash = (e) => {
    e.preventDefault();

    // eslint-disable-next-line react/prop-types
    // 이게 id가 지금 number와 string인지 서로 타입이 조금 다름 좌항 id가 타입이 string임..?
    // 물어봐야 할듯
    const deleteDetail = dashPokemon.filter((pokelist) => pokelist.id != id);
    localStorage.setItem("ChoosePokemon", JSON.stringify(deleteDetail));
    setDashPokemon(deleteDetail);
  };

  return (
    <>
      {pokemonData && (
        <DetailWrap>
          <DetailBox>
            <DetailParam>
              <img src={pokemonData.img_url}></img>
            </DetailParam>
            <DetailParam>{pokemonData.korean_name}</DetailParam>
            <DetailParam>타입: {pokemonData.types.join(" , ")}</DetailParam>
            <DetailParam>{pokemonData.description}</DetailParam>
            <DetailParam>
              <DetailButton onClick={backSpace}>도감으로 돌아가기</DetailButton>
              <DetailButton onClick={chooseToggle ? deleteDash : handleDash}>
                {chooseToggle ? "삭제" : "추가"}
              </DetailButton>
            </DetailParam>
          </DetailBox>
        </DetailWrap>
      )}
    </>
  );
};

export default PokemonDetail;
