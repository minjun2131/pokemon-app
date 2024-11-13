import Router from "./shared/Router";
import "./index.css";
import PokemonManage from "./components/PokemonManage";

const App = () => {
  return (
    <PokemonManage>
      <Router />
    </PokemonManage>
  );
};

export default App;
