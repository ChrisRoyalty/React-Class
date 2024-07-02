import "./App.css";
import Captures from "./Captures";
import Button from "./Button";
 
import firstImg from "/cat2.jpg";
import secondImg from "/dinoseur.webp";
import thirdImg from "/dog01.webp";
import fourthImg from "/fish.jpg";

function App() {
  const card = [
    {
      image: firstImg,
      text: "Shop Cats",
      bgColor: "bg-yellow-800"
    },
    {
      image: secondImg,
      text: "Dinoseurs",
      bgColor: "bg-gray-800"
    },
    {
      image: thirdImg,
      text: "Shop Dogs",
      bgColor: "bg-blue-800"
    },
    {
      image: fourthImg,
      text: "Shop Fishes",
      bgColor: "bg-purple-800"
    }
  ]
  return (
    
    <>
      <h1>Image Displays</h1>
      <div className="grid grid-cols-4 max-md:grid-col-3 max-sm:grid-cols-2 max-[250px]:grid-cols-1 gap-6">
      {
        card.map((items) => (
          <div className="">
            <Captures src={items.image}/>
            <Button text={items.text} bgColor={items.bgColor} />
          </div>
        ))
      }

      </div>
    </>
  )
}

export default App;