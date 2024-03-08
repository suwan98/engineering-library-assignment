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

export async function fetchPokemonService({
  pageParams,
}): Promise<PokemonResponse> {
  /* Pokemon 데이터를 최대 100개 / 추후 20개로 페이지네이션 */
  const response = await fetch(
    `${POKE_BASE_URL}?limit=100&offset=${pageParams}`
  );

  /* 서버와 응답 실패시 Error 객체 생성 */
  if (!response.ok) {
    throw new Error("포켓몬 데이터를 불러오는데 실패했습니다.");
  }

  const pokemons = await response.json();

  /* Pokemon Data를 불러올 시 이미지도 함께 불러와야하므로 이미지 포함 함수로직 작성 */
  const getPokemonsWithImages = await pokemons.results.map(
    (pokemon: any, index: number) => {
      const pokemonImage = `${POKE_IMAGE_URL}/${index + 1}.png`;

      return {
        ...pokemon,
        imageUrl: pokemonImage,
      };
    }
  );

  return getPokemonsWithImages;
}

/* let paddedIndex = pageParam === 0 ? ('00' + (index + 1)).slice(-3) : ('00' + (index + 1 + pageParam)).slice(-3) */
