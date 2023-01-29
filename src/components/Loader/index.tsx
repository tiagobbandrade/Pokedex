import styled from "styled-components";

export function Loader() {
  return <Loading />;
}

const Loading = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  margin: auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 6px solid transparent;
    border-top-color: #da2626;
  }

  &::before {
    z-index: 100;
    animation: spin 1s infinite;
  }

  &::after {
    border: 6px solid #ccc;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
