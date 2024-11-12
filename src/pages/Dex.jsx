import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard.jsx";

const Dex = ({ dashPokemon, setDashPokemon }) => {
  return (
    <div>
      <Dashboard dashPokemon={dashPokemon} setDashPokemon={setDashPokemon} />
      <PokemonList dashPokemon={dashPokemon} setDashPokemon={setDashPokemon} />
    </div>
  );
};

export default Dex;
