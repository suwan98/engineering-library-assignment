"use client";

import styled from "@emotion/styled";
import usePokemonData from "@/hooks/usePokemonData";
import PokeCard from "./PokeCard";

function PokeCardList() {
  const {pokemons} = usePokemonData();

  console.log(pokemons);

  return (
    <section>
      <PokemonList>
        {pokemons &&
          pokemons.map(({name, url}) => {
            return <PokeCard key={url} pokemonName={name} />;
          })}
      </PokemonList>
    </section>
  );
}

export default PokeCardList;

const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
`;
