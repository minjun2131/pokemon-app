import { useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonManage = ({ children }) => {
  const [dashPokemon, setDashPokemon] = useState(
    JSON.parse(localStorage.getItem("ChoosePokemon")) || []
  );
  return (
    <PokemonContext.Provider
      value={{ dashPokemon: dashPokemon, setDashPokemon: setDashPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonManage;
