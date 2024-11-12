import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import { useState } from "react";

const Router = () => {
  const [dashPokemon, setDashPokemon] = useState(
    JSON.parse(localStorage.getItem("ChoosePokemon")) || []
  );
  // const [dashPokemon, setDashPokemon] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex dashPokemon={dashPokemon} setDashPokemon={setDashPokemon} />
          }
        />
        <Route
          path="/pokeDexNo/:id"
          element={
            <PokemonDetail
              dashPokemon={dashPokemon}
              setDashPokemon={setDashPokemon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
