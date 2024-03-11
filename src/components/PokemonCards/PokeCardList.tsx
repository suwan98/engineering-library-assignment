"use client";

import fetchPokemonService from "@/service/fetchPokemonService";
import {useInfiniteQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import Image from "next/image";

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
      {pokeomons &&
        pokeomons.pages?.map((group, index) => (
          <>
            {group &&
              group.map((pokemon, groupIndex) => (
                <>
                  <Image
                    src={pokemon.imageUrl}
                    width={200}
                    height={200}
                    alt="pokemons"
                  />
                  <span>{pokemon.name}</span>
                  {groupIndex === pokeomons.pages.length - 1 &&
                    index === group.length - 1 && <div ref={ref}></div>}
                </>
              ))}
          </>
        ))}
    </section>
  );
}

export default PokeCardList;
