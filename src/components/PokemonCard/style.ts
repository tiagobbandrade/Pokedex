import styled from "styled-components";

export const PokemonContainer = styled.div`
  min-width: 280px;
  width: 100%;
  height: 96px;
  background: #f0f0f0;

  -webkit-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  height: calc(100% - 24px);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  position: absolute;
  top: 12px;
  right: 12px;

  > button {
    height: 16px;
    background: none;
    border: none;
  }

  > span {
    color: #ababab;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    margin-left: 8px;
  }
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  #name,
  #type {
    font-weight: 500;
  }

  #name {
    color: #4d4d4d;
    font-size: 16px;
  }

  #type {
    font-size: 12px;
    color: #ababab;
  }
`;
