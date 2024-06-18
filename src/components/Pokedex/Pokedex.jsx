import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";

//import css
import "./Pokedex.css";

function Pokedex() {
  return (
    <div className="pokedex-wrapper">
      <h1 id="pokemon-name">Pokedex</h1>
      <Search />
      <PokemonList />
    </div>
  );
}

export default Pokedex;
