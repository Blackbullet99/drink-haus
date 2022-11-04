import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/naviagtion/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Store from "./components/store/store.component";
import Cart from "./components/cart/cart.component";
import SignInForm from "./components/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="sign-in" element={<SignInForm />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
