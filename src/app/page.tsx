import PokeCardList from "@/components/PokemonCards/PokeCardList";
import Header from "@/components/common/Header";
import Container from "@/components/common/Container";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <PokeCardList />
      </Container>
    </>
  );
}
