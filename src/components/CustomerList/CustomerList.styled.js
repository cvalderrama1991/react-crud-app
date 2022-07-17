import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  padding-top: 7rem;

  li {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    padding: 0.5rem;
    font-weight: bold;

    &:nth-of-type(even) {
      background-color: grey;
      color: white;
    }

    div {
      display: flex;
      gap: 0.25rem;

      button {
        cursor: pointer;
        border: none;
        font-weight: bold;
        padding: 0.5rem;
        border-radius: 0.25rem;

        &:nth-of-type(1) {
          background-color: orange;
        }
        &:nth-of-type(2) {
          background-color: red;
          color: white;
        }
      }
    }
  }
`