import styled from "@emotion/styled";

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
    <PokemonStatsWrapper>
      <PokemonStatsTitle>포켓몬 스탯 정보</PokemonStatsTitle>
      <ul>
        {stats?.map((stat, index) => (
          <li key={index}>
            {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
            <ProgressBarWrapper>
              <ProgressBar percentage={stat.base_stat}></ProgressBar>
            </ProgressBarWrapper>
          </li>
        ))}
      </ul>
    </PokemonStatsWrapper>
  );
}

const PokemonStatsWrapper = styled.section`
  padding-top: 1rem;
`;

const PokemonStatsTitle = styled.h1`
  padding-bottom: 1rem;
`;

const ProgressBarWrapper = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  margin: 10px 0;
  height: 20px;
  width: 100%;
`;

const ProgressBar = styled.div<{percentage: number}>`
  background-color: #f87171;
  height: 100%;
  border-radius: 8px;
  width: ${({percentage}) => percentage}%;
  position: relative;

  &::after {
    content: "${({percentage}) => percentage}";
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
  }
`;

export default PokemonStats;
