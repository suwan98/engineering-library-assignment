"use client";

import styled from "@emotion/styled";

function Header() {
  return (
    <>
      <PokemonHeader>포켓몬 카드 리스트</PokemonHeader>
    </>
  );
}

export default Header;

const PokemonHeader = styled.header`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: bold;
`;
