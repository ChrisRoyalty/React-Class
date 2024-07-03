function Button({bgColor, text, onclick}) {
  return (
    <>
        <button className = {`p-4 ${bgColor} text-white font-bold border-none rounded-md hover:opacity-70`} onClick={onclick}>{text}</button>
    </>
  )
}

export default Button;