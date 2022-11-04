import styled from "styled-components";

export const HeroConatiner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100%;

  img {
    width: 50%;
    height: 100vh;
    object-fit: cover;
  }
`;

export const HeroContent = styled.div`
  margin: 0 auto;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 7rem;
`;

export const HeroSubContent = styled.div`
  margin-top: 10rem;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    line-height: 2rem;

    span {
      text-transform: lowercase;
      font-size: 1rem;
    }
  }
`;

export const SubContent = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  img {
    width: 15rem;
    height: 20rem;
    object-fit: cover;
    padding: 1rem;
  }
`;
