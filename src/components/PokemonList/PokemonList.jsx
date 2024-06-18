import { useState } from "react";
import "./PokemonList.css";
import { useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
function PokemonList() {
  let [pokemonList, setPokemonList] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  const Pokedex_URL = " https://pokeapi.co/api/v2/pokemon";
  async function downloadPokemons() {
    const resp = await axios.get(Pokedex_URL);
    const pokemonResult = resp.data.results;
    const pokemonResultPromise = pokemonResult.map(
      async (p) => await axios.get(p.url)
    );
    const pokemonData = await axios.all(pokemonResultPromise);

    setPokemonList(
      pokemonData.map((poke) => {
        const pokemon = poke.data;

        return {
          name: pokemon.name,
          id: pokemon.id,
          image: pokemon.sprites.other.dream_world.front_default,
        };
      })
    );
    setIsLoading(false);
  }
  useEffect(() => {
    downloadPokemons();
  }, []);
  return (
    <div className="pokemonList-wrapper">
      <div className="sub-wrapper">
        {isLoading ? (
          "Loading ..."
        ) : (
          <>
            {pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
