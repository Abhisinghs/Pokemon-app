import { useEffect } from "react";
import "./PokemonList.css";
import { useState } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
function PokemonList() {
  let [pokemon_Url, setPokemonUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  let [pokemonList, setPokemonList] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [prevUrl, setPrevUrl] = useState("");
  let [nextUrl, setNextUrl] = useState("");

  async function downloadPokemonData() {
    setIsLoading(true);

    const response = await axios.get(pokemon_Url);
    setPrevUrl(response.data.previous);
    setNextUrl(response.data.next);

    const pokemonResult = response.data.results;
    const pokemonResultData = pokemonResult.map((p) => axios.get(p.url));
    const pokemonData = await axios.all(pokemonResultData);
    setPokemonList(
      pokemonData.map((p) => {
        return {
          id: p.data.id,
          name: p.data.name,
          image: p.data.sprites.other.dream_world.front_default,
        };
      })
    );
    setIsLoading(false);
  }
  useEffect(() => {
    downloadPokemonData();
  }, [pokemon_Url]);

  return (
    <div className="pokemonList-wrapper">
      <div className="pokemon-list">
        {isLoading
          ? "Loading"
          : pokemonList.map((poke) => (
              <Pokemon
                name={poke.name}
                key={poke.id}
                id={poke.id}
                image={poke.image}
              />
            ))}
      </div>
      <div id="buttons">
        <button
          disabled={prevUrl == null}
          onClick={() => prevUrl && setPokemonUrl(prevUrl)}
        >
          Prev
        </button>
        <button
          disabled={nextUrl == null}
          onClick={() => nextUrl && setPokemonUrl(nextUrl)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
