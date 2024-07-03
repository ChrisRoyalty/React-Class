import { MdCancelPresentation } from "react-icons/md";

function AboutDashboard({ cancelAboutModal }) {
  return (
    <div className="w-full h-screen fixed top-0 flex justify-center items-center bg-black/40">
      <div className="w-[50%] h-[40%] p-4 rounded-md bg-gray-50 flex flex-col gap-4 hover:opacity-90 text-center">
        <div className="text-[40px] flex justify-end">
          <MdCancelPresentation onClick={cancelAboutModal} />
        </div>
        <h2 className="font-bold text-[20px]">
          Welcome to Chris Learning Platform
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          sequi atque aliquam, reiciendis pariatur temporibus sed voluptatum ad
          quam repellendus, inventore laborum doloremque nam! Tempora
          voluptatibus quae magnam iure? Officiis.
        </p>
      </div>
    </div>
  );
}

export default AboutDashboard;
