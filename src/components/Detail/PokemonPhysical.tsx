import styled from "@emotion/styled";

interface TypeItem {
  type: {
    name: string;
  };
}

interface Props {
  weight: number;
  height: number;
  types: TypeItem[];
}

function PokemonPhysical({weight, height, types}: Props) {
  return (
    <PokemonPhysicalWrapper>
      <PokemonPhysicalTitle>포켓몬 신체 정보</PokemonPhysicalTitle>
      <div>몸무게 : {weight / 10}kg</div>
      <div>키 : {height / 10}m</div>

      {types?.map((typeItem, index) => (
        <li key={index}>속성 타입 : {typeItem.type.name}</li>
      ))}
    </PokemonPhysicalWrapper>
  );
}

const PokemonPhysicalWrapper = styled.section`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PokemonPhysicalTitle = styled.h1`
  padding-bottom: 1rem;
`;

export default PokemonPhysical;
