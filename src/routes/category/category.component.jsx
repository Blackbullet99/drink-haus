import { Fragment } from "react";

import { useParams } from "react-router-dom";

import drink from "../../drinks.json";

const Category = () => {
  const { drinkName } = useParams();

  <Fragment>
    <div>
      {drinkName &&
        drink.map((drink) => (
          <div key={drink.id}>
            {drink.name === drinkName && (
              <div>
                <h1>{drink.name}</h1>
                <img src={drink.image} alt={drink.name} />
                <p>Hello</p>
              </div>
            )}
          </div>
        ))}
    </div>
  </Fragment>;
};

export default Category;
