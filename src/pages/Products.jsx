import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchApi();
  }, []);

  return (
    <div className="flex justify-center mt-[12vh]">
      <div className="grid grid-cols-4 gap-8 w-[95%]">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <figure className="bg-black text-white flex flex-col justify-center items-center">
              <img src={product.image} alt="" className="h-[40vh]" />
              <figcaption className="p-4 bg-black/50">
                <b>Product Title: {product.title}</b>
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
