"use client";

import Lottie from "lottie-react";
import loadingData from "../../public/assets/animation/loading.json";

import styled from "@emotion/styled";

function loading() {
  return (
    <LoadingWrapper>
      <Lottie
        loop
        style={{width: 200, height: 200}}
        animationData={loadingData}
      />
    </LoadingWrapper>
  );
}

export default loading;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
`;
