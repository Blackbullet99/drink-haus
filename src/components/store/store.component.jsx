import { Routes, Route } from "react-router-dom";

import CategoryPreview from "../../routes/category-preview/category-preview.component";
import CitrusFlower from "../products/citrus-flower.component";
import SpritzKit from "../products/spritz-kit.component";
import LemonLavender from "../products/lemon-lavender.component";
import SpicedCherry from "../products/spiced-cherry.component";
import NewFashioned from "../products/new-fashioned.component";
import Jalapeno from "../products/jalapeno.component";
import StrawberryBasil from "../products/strawberry-basil.component";
import CocktailKit from "../products/cocktail-kit.component";
import FlowerSpices from "../products/flower-spices.component";
import OldFashioned from "../products/old-fashioned.component";

const Store = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":citrusflower" element={<CitrusFlower />} />
      <Route path=":spritzkit" element={<SpritzKit />} />
      <Route path=":lemonlavender" element={<LemonLavender />} />
      <Route path=":spicedcherry" element={<SpicedCherry />} />
      <Route path=":newfashioned" element={<NewFashioned />} />
      <Route path=":jalapeno" element={<Jalapeno />} />
      <Route path=":strawberrybasil" element={<StrawberryBasil />} />
      <Route path=":cocktailkit" element={<CocktailKit />} />
      <Route path=":flowerspices" element={<FlowerSpices />} />
      <Route path=":oldfashioned" element={<OldFashioned />} />
    </Routes>
  );
};

export default Store;
