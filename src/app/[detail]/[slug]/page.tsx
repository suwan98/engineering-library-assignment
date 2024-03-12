"use client";

import usePokemonDetail from "@/hooks/usePokemonDetail";
import Image from "next/image";
import Container from "@/components/common/Container";
import PokemonStats from "@/components/Detail/PokemonStats";
import PokemonPhysical from "@/components/Detail/PokemonPhysical";
import styled from "@emotion/styled";
import {Card, CardMedia, CardContent} from "@mui/material";

interface Props {
  detail: string;
  slug: string;
}

function PokemonDetailPage({params}: {params: Props}) {
  const {pokemonDetail, isLoading} = usePokemonDetail(params.slug);

  if (!isLoading) {
    return (
      <DetailContainer>
        <Card sx={{padding: "3rem"}}>
          <h1>{pokemonDetail?.name.toUpperCase()}</h1>
          <CardMedia>
            <Image
              src={pokemonDetail?.imageUrl}
              alt="pokemon-detail"
              width={200}
              height={200}
            />
          </CardMedia>
          <CardContent>
            <PokemonPhysical
              weight={pokemonDetail?.weight}
              height={pokemonDetail?.height}
              types={pokemonDetail?.types}
            />
            <hr />
            <PokemonStats stats={pokemonDetail?.stats} />
          </CardContent>
        </Card>
      </DetailContainer>
    );
  }
}

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
`;

export default PokemonDetailPage;
