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
