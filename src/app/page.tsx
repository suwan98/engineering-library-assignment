import PokeCardList from "@/components/PokemonCards/PokeCardList";
import Header from "@/components/common/Header";
import HomeWrapper from "@/components/common/HomeWrapper";
import GlobalStyle from "@/styles/globalStyle";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <HomeWrapper>
        <Header />
        <main>
          <PokeCardList />
        </main>
      </HomeWrapper>
    </>
  );
}
