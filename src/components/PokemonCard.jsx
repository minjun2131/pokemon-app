import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const DexImage = styled.div`
  padding-top: 20px;
`;

const PokeImg = styled.img`
  width: 100%;
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

const Button = styled.button`
  cursor: pointer;
`;

const PokemonCard = ({
  pokemon,
  dashPokemon,
  setDashPokemon,
  toggleDefault,
}) => {
  const { id, img_url, korean_name, description, types } = pokemon;

  const addHandler = (e) => {
    e.preventDefault();
    const newData = { img_url, korean_name, id, description, types };
    if (dashPokemon.length > 5) {
      MySwal.fire({
        icon: "warning",
        title: "초과",
        text: "포켓몬은 한번에 6마리까지 소지 가능합니다.",
        showCancelButton: false,
      });
      return;
    }
    const includePokemon = dashPokemon.some((pokemon) => pokemon.id === id);
    console.log(dashPokemon);

    if (includePokemon) {
      MySwal.fire({
        icon: "warning",
        title: "중복",
        text: "이미 선택한 포켓몬입니다.",
        showCancelButton: false,
      });
      return;
    }
    console.log(dashPokemon);
    localStorage.setItem(
      "ChoosePokemon",
      JSON.stringify([...dashPokemon, newData])
    );
    setDashPokemon([...dashPokemon, newData]);
  };

  const deleteHandler = (e) => {
    e.preventDefault();

    const deletePokemon = dashPokemon.filter((pokelist) => pokelist.id !== id);
    localStorage.setItem("ChoosePokemon", JSON.stringify(deletePokemon));
    setDashPokemon(deletePokemon);
  };

  return (
    <>
      <DexImage>
        <PokeImg src={img_url} alt={korean_name} />
      </DexImage>
      <DexTitle>{korean_name}</DexTitle>
      <DexNumber>No. {String(id).padStart(3, "0")}</DexNumber>
      <AddButton>
        <Button onClick={toggleDefault ? addHandler : deleteHandler}>
          {toggleDefault ? "추가" : "삭제"}
        </Button>
      </AddButton>
    </>
  );
};

export default PokemonCard;
