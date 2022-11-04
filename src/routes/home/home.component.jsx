import { useNavigate } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

import {
  HeroConatiner,
  HeroContent,
  HeroSubContent,
  SubContent,
} from "./home.styles";

import hero from "../../assets/hero.jpg";
import spicedcherry from "../../assets/spicedcherry.jpg";
import grapefruit from "../../assets/grapefruit.jpg";

const Home = () => {
  const navigate = useNavigate();

  const goToStoreHandler = () => {
    navigate("/store");
  };

  return (
    <div>
      <HeroConatiner>
        <img src={hero} alt="home-img" />
        <HeroContent>
          <HeroSubContent>
            <h1>
              Summertime Sipping Essentials
              <span>from &pound;50.00</span>
            </h1>
          </HeroSubContent>
          <SubContent>
            <img src={spicedcherry} alt="spicedcherry" />
            <img src={grapefruit} alt="grapefruit" />
          </SubContent>
          <div>
            <Button type={BUTTON_TYPE_CLASSES.base} onClick={goToStoreHandler}>
              Shop
            </Button>
          </div>
        </HeroContent>
      </HeroConatiner>
    </div>
  );
};

export default Home;
