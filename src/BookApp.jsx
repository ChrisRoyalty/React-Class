import React, { useEffect, useState } from "react";

function BookApp() {
  const [book, setBook] = useState([]);
  const [inputSearch, setInputSearch] = useState("brave");
  const [change, setChange] = useState("");
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";
  //   const api = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const api = `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}`;
  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(api);
      const data = await response.json();
      if (data.totalItems > 0) {
        setBook(data.items);
        console.log(data.items[0].volumeInfo);
      } else {
        setBook([]);
        console.log("Wrong Input Try Again");
      }
    };
    fetchBook();
  }, [inputSearch]);
  const handleClick = (e) => {
    e.preventDefault();
    setInputSearch(change);
    setChange("");
  };
  return (
    <div className="bg-gray-300 w-full h-fit py-8 flex flex-col items-center">
      <form
        onSubmit={handleClick}
        className="flex justify-center pt-[100px] w-[80%]"
      >
        <input
          type="text"
          placeholder="Enter book to search"
          className="w-[35%] h-[50px] border px-3 outline-none rounded-tl-md rounded-bl-md"
          onChange={(e) => setChange(e.target.value)}
          value={change}
        />
        <button className="p-3 w-fit bg-blue-400 text-white rounded-tr-md rounded-br-md border-none h-[50px]">
          Search now
        </button>
      </form>
      <main className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[80%] gap-8 py-8 justify-items-center place-items-center">
        {book.map((item) => (
          <figure className="bg-white">
            <img
              src={item.volumeInfo.imageLinks.thumbnail}
              alt=""
              className="h-[40vh] w-full shadow-lg"
            />
            <figcaption className="p-2 shadow-lg h-[40vh] overflow-scroll">
              <p>
                <strong>Book Title:</strong> {item.volumeInfo.title}
              </p>
              <p>
                <strong>Author: </strong>
                {item.volumeInfo.authors}
              </p>
              <p>
                <strong>Published:</strong> {item.volumeInfo.publishedDate}
              </p>
              <p>
                <strong>Description: </strong> {item.volumeInfo.description}
              </p>
              <a href={item.volumeInfo.previewLink}>
                <strong>Preview: </strong>
                <small className="text-red-600">Click for preview</small>
              </a>
            </figcaption>
          </figure>
        ))}
      </main>
    </div>
  );
}

export default BookApp;
