import "./Pokemon.css";

function Pokemon({ name, image }) {
  return (
    <div className="pokemon-wrapper">
      <h3>{name}</h3>
      <img src={image} alt="pokemon" />
    </div>
  );
}

export default Pokemon;
