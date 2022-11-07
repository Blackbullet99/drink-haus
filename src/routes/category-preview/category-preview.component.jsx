import { Fragment } from "react";

import {
  StoreContainer,
  StoreContent,
  StoreSubContent,
  StoreLink,
} from "./category-preview.styles";

import citrusFlower from "../../assets/citrusflower.jpg";
import spritzKit from "../../assets/spritzkit.jpg";
import lemonLavender from "../../assets/lemonlavender.jpg";
import spiceddCherryy from "../../assets/spiceddcherryy.jpg";
import newFashioned from "../../assets/newfashioned.jpg";
import jalapeno from "../../assets/jalapeno.jpg";
import strawberryBasil from "../../assets/strawberrybasil.jpg";
import cocktailKit from "../../assets/cocktailkit.jpg";
import flowerSpices from "../../assets/flowerspices.jpg";
import oldFashioned from "../../assets/oldfashioned.jpg";

const CategoryPreview = () => {
  return (
    <Fragment>
      <StoreContainer>
        <StoreContent>
          <StoreSubContent>
            <StoreLink to="/store/citrusFlower">
              <h2>
                citrus flower <span>Shop now</span>
                <img src={citrusFlower} alt="citrus flower" />
              </h2>
            </StoreLink>
            <StoreLink to="/store/spritzKit">
              <h2>
                spritz <img src={spritzKit} alt="spritz kit" />
                kit <span>Shop now</span>
              </h2>
            </StoreLink>
            <StoreLink to="/store/lemonLavender">
              <h2>
                <img src={lemonLavender} alt="lemon lavender" />
                lemon lavender <span>Shop now</span>
              </h2>
            </StoreLink>
            <StoreLink to="/store/spicedCherry">
              <h2>
                spiced <img src={spiceddCherryy} alt="spiced cherry" />
                cherry <span>Shop now</span>
              </h2>
            </StoreLink>
            <StoreLink to="/store/newFashioned">
              <h2>
                new fashioned <span>Shop now</span>
                <img src={newFashioned} alt="new fashioned" />
              </h2>
            </StoreLink>
            <StoreLink to="/store/jalapeno">
              <h2>
                grapefruit <img src={jalapeno} alt="grapefruit jalapeno" />
                jalapeno <span>Shop now</span>
              </h2>
            </StoreLink>
            <StoreLink to="/store/strawberryBasil">
              <h2>
                <img src={strawberryBasil} alt="strawberry basil" />
                strawberry basil <span>Shop now</span>
              </h2>
            </StoreLink>
            <StoreLink to="/store/cocktailkit">
              <h2>
                cocktail <img src={cocktailKit} alt="cocktail kit" />
                kit <span>Shop now</span>
              </h2>
            </StoreLink>
            <StoreLink to="/store/flowerSpices">
              <h2>
                flower spices <span>Shop now</span>
                <img src={flowerSpices} alt="flower spices" />
              </h2>
            </StoreLink>
            <StoreLink to="/store/oldFashioned">
              <h2>
                <img src={oldFashioned} alt="old fashioned" />
                old fashioned <span>Shop now</span>
              </h2>
            </StoreLink>
          </StoreSubContent>
        </StoreContent>
      </StoreContainer>
    </Fragment>
  );
};

export default CategoryPreview;
