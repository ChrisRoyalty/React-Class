import "./App.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
import Header from "./Header";
import MyHeader from "./MyHeader";
// import HeaderComponent from "./HeaderComponent";
// import MenuDisplay from "./MenuDisplay";
function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const handleClick = () => {
    setToggleModal(true);
  };

  return (
    <>
      {/* <HeaderComponent /> */}
      {/* <Header /> */}
      <MyHeader />
      <div className="">
        <h1 className="text-4xl">Conditional Rendering</h1>
      </div>
      <main className="h-screen flex justify-center items-center">
        <Button
          text={"Open Modal"}
          bgColor={"bg-blue-600"}
          onclick={handleClick}
        />
        {/* using double ampersand */}
        {/* {toggleModal && <Modal />} */}
        {toggleModal ? <Modal setToggleModal={setToggleModal} /> : null}
        {/* Using the ternary operator */}
      </main>
    </>
  );
}

export default App;
