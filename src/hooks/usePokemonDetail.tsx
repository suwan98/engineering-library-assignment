import {POKE_BASE_URL} from "@/constants/POKE_BASE_URL";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

async function fetchPokemonDetail(pokemonId: string) {
  const response = await axios.get(`${POKE_BASE_URL}/${pokemonId}`);
  return response.data;
}

function usePokemonDetail(pokemonId: string) {
  const {
    data: pokemonDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemonDetail", pokemonId],
    queryFn: () => fetchPokemonDetail(pokemonId),
    /* pokemonId가 없거나 falsy한 값일때 쿼리를 자동으로 비활성화 */
    enabled: !!pokemonId,
  });

  return {pokemonDetail, isLoading, error};
}

export default usePokemonDetail;
