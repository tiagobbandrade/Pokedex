import styled from "styled-components";

interface AlignItemsProps {
  isLoading?: boolean;
}

export const PokedexContainer = styled.div`
  width: 100%;
  height: ${({ isLoading }: AlignItemsProps) => (isLoading ? "100vh" : "100%")};

  display: flex;
  flex-direction: column;
  align-items: ${({ isLoading }: AlignItemsProps) =>
    isLoading ? "center" : "initial"};
  gap: 24px;

  padding: 56px;

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
`;
