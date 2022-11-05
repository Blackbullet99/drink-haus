import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/naviagtion/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Store from "./components/store/store.component";
import Cart from "./components/cart/cart.component";
import Authentication from "./routes/authentication/authentication.component";
import SignUpForm from "./components/sign-up/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="sign-up" element={<SignUpForm />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
