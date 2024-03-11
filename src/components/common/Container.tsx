"use client";

import styled from "@emotion/styled";
interface Props {
  children: React.ReactNode;
}

function HomeWrapper({children}: Props) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

export default HomeWrapper;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
