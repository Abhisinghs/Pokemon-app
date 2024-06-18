import { Link } from "react-router-dom";
import "./Pokemon.css";

function Pokemon({ id, name, image }) {
  return (
    <div className="pokemon-wrapper">
      <h3>{name}</h3>
      <Link to={`/pokemons/${id}`}>
        <img src={image} alt="pokemon" />
      </Link>
    </div>
  );
}

export default Pokemon;
