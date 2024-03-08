import PokeCardList from "@/components/PokemonCards/PokeCardList";
import Header from "@/components/common/Header";
import {QueryClientProvider, useQueryClient} from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PokeCardList />
      </main>
    </>
  );
}
