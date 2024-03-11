"use client";

import fetchPokemonService from "@/service/fetchPokemonService";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import Image from "next/image";
import PokeCard from "./PokeCard";
import {Grid} from "@mui/material";
import styled from "@emotion/styled";

function PokeCardList() {
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
      if (pages.length < 3) {
        return pages.length + 1;
      } else return undefined;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return (
    <section>
      <PokeList>
        {pokeomons &&
          pokeomons.pages?.map((group) => (
            <>
              {group &&
                group.map((pokemon) => (
                  <PokeCard key={pokemon.name} ref={ref} pokemon={pokemon} />
                ))}
            </>
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
  cursor: pointer;
`;

export default PokeCardList;
