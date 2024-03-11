"use client";

import fetchPokemonService from "@/service/fetchPokemonService";
import styled from "@emotion/styled";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {useEffect, useMemo} from "react";
import {useInView} from "react-intersection-observer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {CardContent} from "@mui/material";
import Image from "next/image";

function PokeCardList() {
  const {ref, inView} = useInView();

  const {
    data: pokeomons,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({pageParam = 1}) => fetchPokemonService(pageParam),
    getNextPageParam: (_, pages) => {
      if (pages.length < 3) {
        return pages.length + 1;
      } else return undefined;
    },
  });

  console.log(pokeomons);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <section>
      <Grid container spacing={2}>
        {pokeomons &&
          pokeomons.pages?.map((group, index) => (
            <Grid item xs={6} key={index}>
              <Item elevation={3}>
                {group &&
                  group.map((p, index) => (
                    <div>
                      <Image
                        src={p.imageUrl}
                        width={200}
                        height={200}
                        alt="pokemons"
                      />
                      <li key={index}>{p.name}</li>
                    </div>
                  ))}
              </Item>
            </Grid>
          ))}
      </Grid>
    </section>
  );
}

export default PokeCardList;

const Item = styled(Paper)(() => ({
  backgroundColor: "#98d6a9",
  padding: 8,
  textAlign: "center",
  color: "black",
}));
