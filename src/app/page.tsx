import PokeCardList from "@/components/PokemonCards/PokeCardList";
import Header from "@/components/common/Header";

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
