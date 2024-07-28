
function Button({children}) {
  return (
    <button className="bg-[#B5C18E] w-full  h-10 rounded-sm text-black/70  hover:bg-[#dae9a9]/80 transition-all">
       {children}
      </button>
  )
}

export default Button