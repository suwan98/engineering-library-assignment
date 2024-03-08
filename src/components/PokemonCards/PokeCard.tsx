interface PokeCardProps {
  pokemonName: string;
}

function PokeCard({pokemonName}: PokeCardProps) {
  return (
    <>
      <li>{pokemonName}</li>
    </>
  );
}

export default PokeCard;
