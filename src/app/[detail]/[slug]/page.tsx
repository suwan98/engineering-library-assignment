import {useSearchParams} from "next/navigation";

interface Props {
  detail: string;
  slug: string;
}

function PokemonDetailPage({params}: {params: Props}) {
  console.log(params);

  return (
    <>
      <div>포켓몬 상세 페이지</div>
    </>
  );
}

export default PokemonDetailPage;
