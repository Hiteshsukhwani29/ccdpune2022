interface props {
  heading: string
}

const Title = ({ heading }: props) => {
  return (
    <div className="flex justify-center items-center flex-col p-5 text-blackOlive">
      <div className="text-3xl text-blackOlive pb-2">{heading}</div>
      <hr className="w-1/6 border-b-2 border-gray-400 text-center"></hr>
    </div>
  )
}

export default Title
