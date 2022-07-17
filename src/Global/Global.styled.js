import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
  }
`
export default GlobalStyles

export const Container = styled.div`
  background-color: white;
  width: 100%;
  min-height: 100vh;
`