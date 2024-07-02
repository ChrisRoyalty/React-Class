function Button({bgColor, text}) {
  return (
    <>
        <button className = {`p-4 ${bgColor} text-white font-bold w-full border-none`} >{text}</button>
    </>
  )
}

export default Button