import {POKE_BASE_URL, POKE_IMAGE_URL} from "@/constants/POKE_BASE_URL";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
  imageUrl: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

async function fetchPokemons(pageParams = 0): Promise<PokemonResponse> {
  /* 한페이지에 보여줄 포켓몬 수 */
  const LIMIT = 20;
  const response = await axios.get(`${POKE_BASE_URL}`, {
    params: {
      offset: pageParams ? pageParams : 0,
      limit: LIMIT,
    },
  });
  const pokemons = await response.data;

  return pokemons;
}

/* 각 포켓몬들에 맞는 Image 반환 */
function addImageToPokemon(pokemon: Pokemon, index: number) {
  return {
    ...pokemon,
    imageUrl: `${POKE_IMAGE_URL}/${index}.png`,
  };
}

async function fetchPokemonService(pageParams = 0) {
  const pokemons = await fetchPokemons(pageParams);
  const pokemonsWithImage = pokemons.results.map(addImageToPokemon);

  return pokemonsWithImage;
}

export default fetchPokemonService;
