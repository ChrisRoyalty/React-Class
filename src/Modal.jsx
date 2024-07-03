import Button from "./Button";
function Modal({ setToggleModal }) {
  return (
    <section className="top-0 w-screen h-screen flex justify-center items-center absolute bg-black/40">
      <section className=" w-[50%] h-[60vh] grid justify-items-center content-center bg-white px-32 gap-5">
        <h1 className="text-4xl">This is a modal</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          corrupti facere velit, placeat, laborum provident nulla possimus eius
          aliquid soluta odio recusandae tenetur dolore quae porro molestiae?
          Cupiditate, quae optio.
        </p>
        <Button
          text={"Close Modal"}
          bgColor={"bg-blue-600"}
          onclick={() => setToggleModal(false)}
        />
      </section>
    </section>
  );
}

export default Modal;
