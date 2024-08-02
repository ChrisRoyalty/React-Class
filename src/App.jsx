import "./App.css";
import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Main from "./components/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Product from "./pages/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
