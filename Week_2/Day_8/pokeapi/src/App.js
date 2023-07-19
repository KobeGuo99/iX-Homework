import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  async function getPokemon() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    const details = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const pokemonData = await response.json();
        return pokemonData;
      })
    );
    
    setPokemon(details);
    console.log(details);
  }

  return (
    <div>
      <div className="text-center m-3">
        <button className="btn btn-primary" onClick={getPokemon}>
          Get pokemon
        </button>
      </div>

      <div>
        {pokemon.map((p) => {
          return (
            <div className="card p-3 m-3" key={p.name}>
              <p>Name: {p.name}</p>
              <p>Id: {p.id}</p>
              <p>
                Moves:{" "}
                {p.moves
                  ? p.moves.map((move) => move.move.name).join(", ")
                  : "No moves found"}
              </p>
              <p>
                Abilities:{" "}
                {p.abilities
                  ? p.abilities
                      .map((ability) => ability.ability.name)
                      .join(", ")
                  : "No abilities found"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
