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

export async function fetchPokemons(pageParams = 0): Promise<PokemonResponse> {
  /* 한페이지에 보여줄 포켓몬 수 */
  const LIMIT = 50;
  const response = await axios.get(`${POKE_BASE_URL}`, {
    params: {
      offset: pageParams * LIMIT,
      limit: LIMIT,
    },
  });
  const pokemons = await response.data;

  return pokemons;
}

/* 각 포켓몬들에 맞는 Image 반환 */
function addImageToPokemon(pokemon: Pokemon) {
  /* 포켓몬 URL에서 고유 ID 추출 */
  const urlSegment = pokemon.url.split("/");
  const pokemonId = urlSegment[urlSegment.length - 2];

  return {
    ...pokemon,
    imageUrl: `${POKE_IMAGE_URL}/${pokemonId}.png`,
  };
}

async function fetchPokemonService(pageParams = 0) {
  const pokemons = await fetchPokemons(pageParams);
  const pokemonsWithImage = pokemons.results.map(addImageToPokemon);

  return pokemonsWithImage;
}

export default fetchPokemonService;
