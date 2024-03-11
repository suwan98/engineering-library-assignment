"use client";

import {Global, css} from "@emotion/react";

const styles = css`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-color: rgb(226 232 240);
  }
  body,
  button,
  form,
  h1,
  h2,
  h3,
  li,
  ol,
  p,
  pre,
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  main,
  button {
    background: none;
    border: 0;
    box-sizing: initial;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: inherit;
    overflow: visible;
    vertical-align: inherit;
  }
  button:disabled {
    cursor: default;
  }
  :focus {
    outline: 4px solid rgba(0, 125, 250, 0.6);
    outline-offset: 1px;
  }
  :focus[data-focus-method="mouse"]:not(input):not(textarea):not(select),
  :focus[data-focus-method="touch"]:not(input):not(textarea):not(select) {
    outline: none;
  }
  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

function GlobalStyle() {
  return <Global styles={styles} />;
}

export default GlobalStyle;
