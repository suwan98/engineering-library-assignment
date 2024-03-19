"use client";

import Image from "next/image";
import {ForwardedRef, forwardRef} from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import {useRouter} from "next/navigation";

interface PokemonProps {
  name: string;
  url: string;
  imageUrl: string;
}

interface Props {
  pokemon: PokemonProps;
}

const PokeCardStyle = styled(Card)`
  max-width: 21rem;
  padding: 2rem;
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

const PokeCardContent = styled(CardContent)`
  border-top: 1px solid rgb(30 41 59);
`;

const PokeCardTypography = styled(Typography)`
  text-transform: uppercase;
  text-align: center;
`;

const PokeCardButton = styled(Button)`
  background-color: rgb(148 163 184);
  cursor: pointer;

  &:hover {
    background-color: rgb(100 116 139);
  }
`;

function PokeCard({pokemon}: Props, ref: ForwardedRef<HTMLDivElement>) {
  const router = useRouter();
  const handleClickDetailPage = () => {
    router.push(`/detail/${pokemon.name}`);
  };

  return (
    <PokeCardStyle>
      <CardMedia>
        <Image
          src={pokemon.imageUrl}
          width={200}
          height={200}
          alt="pokemons-image"
          layout="responsive"
        />
      </CardMedia>
      <PokeCardContent>
        <PokeCardTypography>{pokemon.name}</PokeCardTypography>
      </PokeCardContent>
      <PokeCardButton variant="contained" onClick={handleClickDetailPage}>
        상세 정보
      </PokeCardButton>
      <div ref={ref}></div>
    </PokeCardStyle>
  );
}

export default forwardRef(PokeCard);
