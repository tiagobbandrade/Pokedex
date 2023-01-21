import styled from "styled-components";

export const Container = styled.div`
  max-width: 328px;
  width: 100%;
  height: 100vh;

  position: relative;
`;

export const Content = styled(Container)`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &::after {
    content: "";
    width: 1px;
    height: 70%;

    background: #bcbaba;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  form {
    align-self: center;
    position: relative;

    input {
      padding: 12px 16px;
      outline: none;

      border: 1px solid #7d7d7d;
      border-radius: 10px;
    }

    button {
      background: none;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
