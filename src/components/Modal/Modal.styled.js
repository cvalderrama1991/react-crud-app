import styled from "styled-components"

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 15;
`

export const CloseBtn = styled.button`
  background-color: black;
  border: none;
  color: white;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 0;
`
export const Form = styled.form`
  background-color:white;
  display: grid;
  align-content: start;
  grid-gap: 0.25rem;
  padding-top: 5rem;
  max-width: 359px;
  margin: 0 auto;
`

export const SubmitBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: royalblue;
  padding: 0.5rem;
  display: block;
  border-radius: 0.25rem;
`