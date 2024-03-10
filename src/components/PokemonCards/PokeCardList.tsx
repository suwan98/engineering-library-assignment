"use client";

import fetchPokemonService from "@/service/fetchPokemonService";
import styled from "@emotion/styled";
import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {useEffect, useMemo, useState} from "react";
import {useInView} from "react-intersection-observer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {CardContent} from "@mui/material";

function PokeCardList() {
  const {ref, inView} = useInView();

  /*   useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
 */

  return (
    <section>
      <Grid container spacing={6}></Grid>
    </section>
  );
}

export default PokeCardList;

const Item = styled(Paper)(({theme}) => ({
  textAlign: "center",
}));
