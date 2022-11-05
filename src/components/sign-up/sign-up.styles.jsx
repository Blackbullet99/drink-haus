import styled from "styled-components";

import { Link } from "react-router-dom";
import { BaseButton } from "../button/button.styles";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  img {
    width: 50%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const SignUpContent = styled.div`
  margin: 0 auto;
  width: 20%;

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

export const ActionContainer = styled.div`
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 1.5rem;
  font-weight: 500;
`;

export const ActionLink = styled(Link)`
  margin-left: 0.5rem;
  color: #000;
`;
