"use client";

import styled from "@emotion/styled";
import PokeCard from "./PokeCard";
import {useInView} from "react-intersection-observer";
import {useInfiniteQuery} from "@tanstack/react-query";
import {fetchPokemonService} from "@/service/fetchPokemonService";

function PokeCardList() {
  const {ref, inView} = useInView();
  const {
    data: pokemons,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemonService,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length === 20 ? allPages.length * 20 : null;
      return nextPage;
    },
  });

  console.log(pokemons);

  return (
    <section>
      <PokemonList>
        {pokemons?.pages?.map((page) =>
          page.map(
            (
              pokemon: {
                imageUrl: string;
                name: string;
              },
              index: number
            ) => {
              if (page.length == index + 1) {
                return (
                  <PokeCard
                    image={pokemon.imageUrl}
                    name={pokemon.name}
                    key={index}
                    innerRef={ref}
                  />
                );
              } else {
                return (
                  <PokeCard
                    image={pokemon.imageUrl}
                    name={pokemon.name}
                    key={index}
                  />
                );
              }
            }
          )
        )}
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
