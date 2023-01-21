import styled from "styled-components";

interface ListItemProps {
  isActive?: boolean;
}

export const SidebarContainer = styled.div`
  max-width: 328px;
  width: 100%;
  height: 100vh;

  position: relative;
`;

export const SidebarContent = styled(SidebarContainer)`
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;

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
  nav ul {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
  }
`;

export const ListItem = styled.li`
  max-width: 328px;
  list-style: none;

  position: relative;

  color: ${({ isActive }: ListItemProps) => (isActive ? "#DA2626" : "#7D7D7D")};

  &::after,
  &::before {
    content: "";

    border-radius: 50%;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    background-color: #da2626;
    display: ${({ isActive }: ListItemProps) =>
      isActive ? "inline-block" : "none"};
  }

  &::after {
    width: 12px;
    height: 12px;
    left: -6px;
  }

  &::before {
    width: 16px;
    height: 16px;
    opacity: 0.5;
    left: -7px;
  }

  a {
    width: 100%;
    height: 100%;
    padding: 20px 0 20px 56px;

    color: inherit;

    display: flex;

    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;

    transition: all 0.4s;

    &:hover {
      background: #da262620;
    }
  }
`;
