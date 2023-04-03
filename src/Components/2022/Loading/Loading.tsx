import gdgLogo from '../../Images/gdsc-logo.gif'

function Loading() {
  return (
    <div
      className="bg-white flex items-center flex-col justify-center h-full w-full fixed top-0 ;
            z-index: 200000;"
    >
      <img src={gdgLogo} alt="gdglogo" className="rounded-full w-48 h-48 " />
      <div className="flex items-center justify-center h-48">
        <div className="bg-blue-600  h-10 w-10 rounded-full mr-7 animate-bounce animation-delay-0 " />
        <div className="bg-red-600 h-10 w-10 rounded-full mr-7 animate-bounce animation-delay-75" />
        <div className="bg-yellow-600 h-10 w-10 rounded-full mr-7 animate-bounce animation-delay-150" />
        <div className="bg-green-600 h-10 w-10 rounded-full mr-7 animate-bounce animation-delay-225" />
      </div>
    </div>
  )
}

export default Loading
