import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
function StickyHeader() {
  const [sticky, setSticky] = useState();
  const [toggleMenu, setToggleMenu] = useState("h-0");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      scroll > 200 ? setSticky("fixed") : setSticky("static");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleToggleMenu = () => {
    toggleMenu === "h-[60vh]"
      ? setToggleMenu("h-0")
      : setToggleMenu("h-[60vh]");
  };
  return (
    <header
      className={`w-full flex justify-between items-center px-10 h-[15vh] bg-gray-700 text-white ${sticky}`}
    >
      <strong>Logo.</strong>
      <nav
        className={`grid left-0 px-10 md:p-0 md:flex items-center gap-5 absolute md:static top-[16vh] w-full md:w-fit md:h-fit bg-gray-700 md:bg-transparent ${toggleMenu} overflow-hidden transition-all duration-500`}
      >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Gallery</a>
        <a href="">Blog</a>
      </nav>
      <button
        className={`p-1 borde-[1px] border-white/80 md:hidden block text-2xl `}
        onClick={handleToggleMenu}
      >
        <MdMenu />
      </button>
    </header>
  );
}

export default StickyHeader;
