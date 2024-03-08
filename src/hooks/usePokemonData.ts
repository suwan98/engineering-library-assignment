import {POKE_BASE_URL} from "@/constants/POKE_BASE_URL";
import {fetchPokemonService} from "@/service/fetchPokemonService";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";

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
