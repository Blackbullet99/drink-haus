import { Routes, Route } from "react-router-dom";

import CategoryPreview from "../../routes/category-preview/category-preview.component";
import Category from "../../routes/category/category.component";
import NotFound from "../error-page/error-page.component";

const Store = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":drinkName" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Store;
