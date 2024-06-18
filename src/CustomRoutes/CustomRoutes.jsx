import { Route, Routes } from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetails from "../components/PokemonDetails/PokemonDetails";

function CustomRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemons/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}
export default CustomRoutes;
