import styled from "styled-components";

export const FooterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #242424;
  color: #ffffee;

  p {
    font-size: 1rem;
    font-weight: 600;
  }
  
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 7rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5rem;
  margin: 0;

  h1 {
    font-family: "Alice", serif;
    font-size: 4rem;
    margin: 0;
    letter-spacing: -0.3rem;
    font-weight: 500;
  }
`;

export const Documentation = styled.div`
  p {
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0;
    line-height: 2.2rem;
  }
`;

export const EmailInfo = styled.div`
  width: 50%;
  margin: 0 auto;

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 7rem;

  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;

export const SocialsContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  a {
      text-decoration: none;
      color: grey;
      text-transform: uppercase;
      line-height: 2rem;
      font-size: 0.8rem;
  }
`;
