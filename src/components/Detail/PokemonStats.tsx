interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface Props {
  stats: Stat[];
}

function PokemonStats({stats}: Props) {
  return (
    <>
      <h2>포켓몬 스탯 정보</h2>
      <ul>
        {stats?.map((stat, index) => (
          <li key={index}>
            {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:
            <span>{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PokemonStats;
