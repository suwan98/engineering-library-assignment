import {fetchPokemonService} from "@/service/fetchPokemonService";
import {useEffect, useState} from "react";

interface PokemonResults {
  name: string;
  url: string;
}

export default function usePokemonData() {
  const [pokemons, setPokemons] = useState<PokemonResults[]>([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetchPokemonService();
      setPokemons(response.results);
    }

    fetchPokemon();
  }, []);

  return {pokemons};
}
