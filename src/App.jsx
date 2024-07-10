import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Button";
function App() {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [change, setChange] = useState("");
  const [error, setError] = useState();
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";

  const api = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(api);
      const data = await response.json();
      if (data.hits.length > 0) {
        setRecipe(data.hits);
        setError(null);
        console.log(data);
      } else {
        setRecipe([]);
        setError("No recipe found");
      }
    };
    fetchRecipe();
  }, [query]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(change);
    setChange("");
  };
  return (
    <>
      <form
        className="flex justify-center items-center my-10"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="search for recipe..."
          className="border-[1px] border-gray-500 p-3 rounded-md"
          onChange={(e) => setChange(e.target.value)}
          value={change}
        />
        <Button text={"Search"} bgColor={"bg-blue-500"} />
      </form>
      <h1 className="text-4xl">{error}</h1>
      <main className="w-[80%] m-auto h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        {recipe.map((item, index) => (
          <figure
            key={index}
            className="h-[50vh] overflow-y-scroll rounded-md p-3 shadow-xl border"
          >
            <img
              src={item.recipe.image}
              alt={`recipe ${index} image`}
              className="w-full h-1/2 rounded-md shadow-md"
            />
            <figcaption className="flex flex-col gap-2">
              <h1 className="text-[18px] font-bold mt-2">
                Recipe: {item.recipe.label}
              </h1>
              <p className="">
                <strong>Ingredients:</strong> {item.recipe.ingredientLines}
              </p>
            </figcaption>
          </figure>
        ))}
      </main>
    </>
  );
}

export default App;
