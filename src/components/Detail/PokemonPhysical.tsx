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
    <>
      <h2>포켓몬 신체 정보</h2>
      <div>몸무게 : {weight / 10}kg</div>
      <div>키 : {height / 10}m</div>

      {types?.map((typeItem, index) => (
        <li key={index}>속성 타입 : {typeItem.type.name}</li>
      ))}
    </>
  );
}

export default PokemonPhysical;
