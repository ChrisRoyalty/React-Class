import { MdCancelPresentation } from "react-icons/md";
function MenuDisplay({ cancelMenu }) {
  return (
    <div>
      <div className="fixed left-0 top-[12vh] w-[30%] h-screen bg-gray-300 text-black/40 px-8 py-16">
        <nav className="flex flex-col gap-12">
          <span className="flex justify-end text-[40px]">
            <MdCancelPresentation onClick={cancelMenu} />
          </span>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Textimonials</a>
          <a href="">Projects</a>
        </nav>
      </div>
    </div>
  );
}

export default MenuDisplay;
