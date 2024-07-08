import "./App.css";
import Button from "./Button";
// import Modal from "./Modal";
import { useState, useEffect } from "react";
// import Header from "./Header";
// import MyHeader from "./MyHeader";
// import HeaderComponent from "./HeaderComponent";
// import MenuDisplay from "./MenuDisplay";
function App() {
  const [products, setProducts] = useState([]);
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);

      const data = await response.json();
      console.log(data);

      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-4xl">Products</h1>
      <main className="flex justify-center items-center h-screen flex-wrap gap-5">
        {products.map((product, index) => (
          <figure
            key={index}
            className="w-1/4 h-96 border-[1px] border-black/60"
          >
            <img
              src={product.image}
              alt="product image"
              className="w-full h-60"
            />
            <figcaption className="space-y-3 grid justify-items-center">
              <strong className="text-sm text-center">{product.title}</strong>
              <br />
              <strong className="text-sm text-center">{product.price}</strong>
            </figcaption>
          </figure>
        ))}
      </main>
    </>
  );
}

export default App;
