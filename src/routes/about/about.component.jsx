import { Fragment } from "react";

import {
  AboutContainer,
  AboutContent,
  AboutHeroSection,
  AboutSubContent,
  SubContent,
  AboutBottomSection,
  BottomSubContent
} from "./about.styles";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import Footer from "../../components/footer/footer.component";

import easyToDrink from "../../assets/easytodrink.jpg";
import aboutSubImage from "../../assets/aboutsubimage.jpg";
import ceoHaus from "../../assets/ceohaus.jpg";
import mixer from "../../assets/mixer.jpg";
import shopPreview from "../../assets/shoppreview.jpg";

const About = () => {
  return (
    <Fragment>
      <AboutContainer>
        <AboutContent>
          <AboutHeroSection>
            <h1>Haus</h1>
            <div>
              <p>
                Easy <img src={easyToDrink} alt="havinggoodtime" /> to drink.
              </p>
              <p>Natural ingredients. Nothing fake.</p>
              <p>
                Delivered <img src={aboutSubImage} alt="aboutsubimage" /> to
                your door.
              </p>
            </div>
          </AboutHeroSection>
          <AboutSubContent>
            <SubContent>
              <h1>A Modern spin on the aperitif</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quae, qui vero eveniet, veniam velit reiciendis esse corrupti
                tenetur fuga, dolor enim nemo maiores odio necessitatibus
                voluptates praesentium inventore rem.
              </p>
              <p>
                lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              </p>
              <img src={shopPreview} alt="shoppreview" />
              <Button type={BUTTON_TYPE_CLASSES.base}>Shop</Button>
              </SubContent>
            <img src={ceoHaus} alt="ceo" />
          </AboutSubContent>
          <AboutBottomSection>
            <img src={mixer} alt="mixer" />
            <BottomSubContent>
              <h2>
                The perfect anytime drink, sip Haus on its own or with simple
                mixers you probably already have like soda or tonic
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus voluptatum, quaerat rerum optio tenetur sed nulla
                voluptaus.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </BottomSubContent>
          </AboutBottomSection>
        </AboutContent>
      </AboutContainer>
      <Footer />
    </Fragment>
  );
};

export default About;
