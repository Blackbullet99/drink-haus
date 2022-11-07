import styled from "styled-components";

import { Link } from "react-router-dom";

export const StoreContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0; */
  width: 100%;
`;

export const StoreContent = styled.div`
  /* display: flex;
flex-direction: column;
align-items: center; */
  /* margin: 0 auto; */
  margin-left: 7rem;
  margin-top: 10rem;
`;

export const StoreSubContent = styled.div`
  h2 {
    font-family: "Alice", serif;
    font-size: 8rem;
    font-weight: bolder;
    text-transform: uppercase;
    cursor: pointer;

    span {
      font-size: 1rem;
      display: none;
    }

    &:hover {
      color: #a4624f;
      span {
        display: inline;
      }
    }

    img {
      width: 11rem;
      height: 6rem;
      object-fit: cover;
      padding: 0 1rem;
    }
  }
`;

export const StoreLink = styled(Link)`
text-decoration: none;
color: #000;
`

