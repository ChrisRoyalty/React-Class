import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Product() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, []);
  if (loading) {
    return <h1 className="text-4xl mt-10">Loading...</h1>;
  }
  return (
    <div>
      <div className="w-[80%] m-auto border">
        <figure>
          <img src={product.image} alt="" />
          <figcaption className="p-4 bg-black/50">
            <b>Product Title: {product.title}</b>
            <b>Price: {`$${product.price}`}</b>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Product;
