import styled from "styled-components";

interface AlignItemsProps {
  isLoading?: boolean;
}

export const PokedexContainer = styled.div`
  width: 100%;
  height: ${({ isLoading }: AlignItemsProps) => (isLoading ? "100vh" : "100%")};

  display: flex;
  align-items: ${({ isLoading }: AlignItemsProps) =>
    isLoading ? "center" : "initial"};

  padding: 56px;
`;

export const Fade = styled.div`
  animation: fade 0.6s;
  display: flex;
  flex-direction: column;
  gap: 24px;

  > .title {
    font-size: 24px;
    text-transform: uppercase;
    color: #7d7d7d70;
    position: relative;
    max-width: 180px;

    &::after {
      content: "";
      width: 100%;
      height: 1px;

      position: absolute;
      bottom: -4px;
      right: 0;

      background: #7d7d7d70;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
