import { Fragment } from "react";

import {
  StoreContainer,
  StoreContent,
  StoreSubContent,
  StoreLink,
} from "./category-preview.styles";

import drinks from "../../drinks.json";

const CategoryPreview = () => {
  return (
    <Fragment>
      <StoreContainer>
        <StoreContent>
          <StoreSubContent>
            {drinks.map((drink) => (
              <StoreLink to={`/store/${drink.name}`} key={drink.id}>
                <h2>
                  {drink.name} <span>Shop now</span>
                  <img src={drink.image} alt={drink.name} />
                </h2>
              </StoreLink>
            ))}
          </StoreSubContent>
        </StoreContent>
      </StoreContainer>
    </Fragment>
  );
};

export default CategoryPreview;
