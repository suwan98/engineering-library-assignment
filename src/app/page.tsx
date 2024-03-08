import PokeCardList from "@/components/PokemonCards/PokeCardList";
import Header from "@/components/common/Header";
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
