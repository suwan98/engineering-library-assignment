"use client";

import fetchPokemonService from "@/service/fetchPokemonService";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import PokeCard from "./PokeCard";
import styled from "@emotion/styled";

function PokeCardList() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const {ref, inView} = useInView();

  const {
    data: pokeomons,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    initialPageParam: 1,
    queryFn: ({pageParam = 1}) => fetchPokemonService(pageParam),
    getNextPageParam: (_, pages) => {
      if (pages.length < 5) {
        return pages.length + 1;
      } else return undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  const filteredPokemons = pokeomons?.pages
    ?.flat() // 모든 페이지를 하나의 배열로 평탄화
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
    );

  return (
    <section>
      <input
        type="text"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
        placeholder="Search by name..."
      />
      <PokeList>
        {filteredPokemons &&
          filteredPokemons.map((pokemon) => (
            <PokeCard key={pokemon.name} pokemon={pokemon} />
          ))}
      </PokeList>
    </section>
  );
}

const PokeList = styled.ul`
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export default PokeCardList;
