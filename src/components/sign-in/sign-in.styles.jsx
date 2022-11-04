import styled from "styled-components";

import { BaseButton } from "../button/button.styles";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const LoginContent = styled.div`
  margin: 0 auto;
  width: 20%;
  /* display: flex;
  justify-content: center;
  flex-direction: column; */

  h1 {
    font-family: "Alice", serif;
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 2rem;

  ${BaseButton} {
    width: 100%;
    letter-spacing: 0;
  }
`;
