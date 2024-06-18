import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

function PokemonDetails() {
  let [pokemons, setPokemons] = useState({});
  let { id } = useParams();
  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemons({
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      image: response.data.sprites.other.dream_world.front_default,
      type: await response.data.types.map((t) => t.type.name),
    });
  }
  useEffect(() => {
    downloadPokemon();
  }, []);
  return (
    <div className="pokemon">
      <h1>{pokemons.name}</h1>
      <img src={pokemons.image} />
      <h3>Height: {pokemons.height}</h3>
      <h3>weight: {pokemons.weight}</h3>
      <h3>Type: {pokemons.type}</h3>
    </div>
  );
}

export default PokemonDetails;
