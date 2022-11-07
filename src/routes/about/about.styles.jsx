import styled from "styled-components";

import { BaseButton } from "../../components/button/button.styles";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0; */
  width: 100%;
`;

export const AboutContent = styled.div`
  margin-left: 7rem;
  margin-top: 10rem;
`;

export const AboutHeroSection = styled.div`
font-family: 'Alice', serif;
margin-bottom: 7rem;

h1{
    font-size: 14rem;
    margin: 0;
}

p{
    font-size: 7rem;
    margin: 0;
}

img{
    width: 5rem;
    height: 5rem;
    object-fit: cover;
}
`;

export const AboutSubContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10rem;

img{
    width: 60rem;
}
`

export const SubContent = styled.div`
margin: 0 auto;
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 700;

img{
    width: 17rem;
    height: 20rem;
    object-fit: cover;
    margin-top: 2rem;
}

${BaseButton}{
    margin-top: 3rem;
    width: 10rem;
}
`

export const AboutBottomSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5rem;
font-weight: 700;

img{
    width: 50rem;
    height: 30rem;
    object-fit: cover;
}
`

export const BottomSubContent = styled.div`
margin: 0 auto;
width: 30%;
`
