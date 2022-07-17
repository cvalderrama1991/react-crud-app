import styled from "styled-components";

export const HeaderBar = styled.header`
  width: 100%;
  height: 7rem;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    h2 {
      color: black;
    }

    button {
      cursor: pointer;
      border: none;
      background-color: royalblue;
      color: white;
      border-radius: 0.25rem;
      height: inherit;
      padding: 0 1rem;
      font-weight: bold;
    }
  }
`

export const TypeList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: black;

  li {
    display: grid;
    place-items: center;
    font-weight: bold;
    color: white;
  }
`