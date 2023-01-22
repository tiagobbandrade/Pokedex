import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 24px;
    color: #ababab;
  }

  a {
    color: #da2626;
    text-transform: lowercase;
  }
`;
