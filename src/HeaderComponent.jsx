import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import MenuDisplay from "./MenuDisplay";
import AboutDashboard from "./AboutDashboard";
function HeaderComponent() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleAboutModal, setToggleAboutModal] = useState(false);

  const displayMenu = () => {
    setToggleMenu(true);
  };

  const cancelMenu = () => {
    setToggleMenu(false);
  };

  const displayAboutModal = () => {
    setToggleAboutModal(true);
  };
  const cancelAboutModal = () => {
    setToggleAboutModal(false);
  };

  return (
    <div className="fixed top-0 bg-gray-400 h-[12vh] w-screen flex justify-center items-center">
      <div className="w-[80%] flex justify-between items-center">
        <div className="logo text-[30px]">ChrisLearn</div>
        <nav className="flex gap-8">
          <a href="#" onClick={displayAboutModal}>
            About
          </a>
          <a href="">Contact</a>
          <a href="">Textimonials </a>
          <a href="">Projects</a>
        </nav>
        <div className="menu text-[25px]">
          <CiMenuFries onClick={displayMenu} />
        </div>
      </div>
      {toggleMenu ? <MenuDisplay cancelMenu={cancelMenu} /> : null}
      {toggleAboutModal ? (
        <AboutDashboard cancelAboutModal={cancelAboutModal} />
      ) : null}
    </div>
  );
}

export default HeaderComponent;
