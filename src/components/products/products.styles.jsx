import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ProductContent = styled.div`
  position: relative;

  h1 {
    position: absolute;
    color: #ffffee;
    bottom: 0;
    font-family: "Alice", serif;
    font-size: 7rem;
    text-transform: uppercase;

    span {
      display: block;
      text-transform: lowercase;
    }
  }

  img {
    width: 63rem;
    height: 100vh;
    object-fit: cover;
  }
`;

export const ProductDescription = styled.div`
  margin: 0 auto;
  width: 30%;
  font-weight: 700;

  h2{
    text-transform: uppercase;
  }
`;

export const ProductPrice = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 50%;
margin-top: 3rem;

p{
    border: 1px solid #000;
    padding: 0.6rem 1rem;
}
`
