import {POKE_BASE_URL} from "@/constants/POKE_BASE_URL";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

export async function fetchPokemonService(): Promise<PokemonResponse> {
  /* generation 파라미터를 통해 1세대 포켓몬만을 가져옵니다. */
  const response = await axios.get(`${POKE_BASE_URL}?offset=0&limit=100`);
  const data = response.data;

  const detailPromises = data.results.map(async (pokemon: Pokemon) => {
    const detailResponse = await axios.get(pokemon.url);
    return detailResponse.data;
  });

  const pokemonDetails = await Promise.all(detailPromises);

  return {...data, results: pokemonDetails};
}
