import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  min-width: 9rem;
  width: auto;
  height: 2.8rem;
  letter-spacing: 0.2rem;
  line-height: 1rem;
  padding: 0 2rem 0 2rem;
  font-size: 1rem;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #E5E5E5;
    color: black;
    border: 1px solid black;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;


  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
width: 30px;
height: 30px;
`