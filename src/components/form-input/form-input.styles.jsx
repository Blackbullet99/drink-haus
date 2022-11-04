import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 0.4rem;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  color: ${subColor};
  font-size: 1.1rem;
  padding: 0.5rem;
  display: block;
  width: 96%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1rem 0;

  &:focus {
    outline: none;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 0.5rem 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
