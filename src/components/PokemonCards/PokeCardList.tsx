"use client";

import usePokemonData from "@/hooks/usePokemonData";

function PokeCardList() {
  const {pokemons} = usePokemonData();

  console.log(pokemons);

  return (
    <>
      {
        <div>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
        </div>
      }
    </>
  );
}

export default PokeCardList;
