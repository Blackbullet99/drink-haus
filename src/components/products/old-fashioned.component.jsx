import { useParams } from "react-router-dom";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import {
  ProductContainer,
  ProductContent,
  ProductDescription,
  ProductPrice,
} from "./products.styles";

import oldFashioned from "../../assets/oldfashioned.jpg";

const OldFashioned = () => {
  const { oldfashioned } = useParams();

  return (
    <ProductContainer>
      <ProductContent>
        <h1>
          <span>the</span> {oldfashioned}
        </h1>
        <img src={oldFashioned} alt="oldfashioned" />
      </ProductContent>
      <ProductDescription>
        <h2>Makes 8-12 drinks . 18-20% abv</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            quaerat itaque in. Ea nemo quod excepturi, nostrum, ad delectus sed
            voluptatem consequuntur adipisci rem quo et corporis odit eaque.
            Error!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            enim sit eos maxime accusantium.
          </p>
        </div>
        <ProductPrice>
          <Button type={BUTTON_TYPE_CLASSES.base}>Buy Now</Button>
          <p>
            <span>&pound;</span>50.00
          </p>
        </ProductPrice>
      </ProductDescription>
    </ProductContainer>
  );
};

export default OldFashioned;