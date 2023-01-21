import styled from "styled-components";

export const PokedexContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 56px;

  > h1 {
    font-size: 24px;
    text-transform: uppercase;
  }
`;
export const PokedexGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
`;
