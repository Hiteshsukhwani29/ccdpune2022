import aitlogo from '../../Images/gdsc-ait-logo.png'
import mitaoelogo from '../../Images/gdsc-mitaoe-logo.png'
import i2itlogo from '../../Images/gdsc-i2it-logo.png'
import bvplogo from '../../Images/gdsc-bvp-logo.png'
import pvgcos from '../../ Images / gdsc-pvgcos-logo.png'

const Partners = () => {
  return (
    <div className="max-w-7xl my-16 mx-auto">
      <div className="flex justify-center md:justify-start text-2xl lg:text-xl font-light text-g-blue-3">
        Community Partners
      </div>
      <div className=" w-fit my-4 space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-5 mx-handler">
        <a
          className="w-fit rounded cursor- pointer"
          href="https://gdsc.community.dev/army-institute-of-technology-pune/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={aitlogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
                  href="https://gdsc.community.dev/bharati-vidyapeeth-deemed-university-college-of-engineering-pune/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={bvplogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
          href="https://gdsc.community.dev/international-institute-of-information-technology-isquareit-pune//"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={i2itlogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
                  href="https://gdscmitaoe.github.io/"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={mitaoelogo} alt="logo" className="w-[220px]" />
        </a>
        <a
          className="w-fit rounded cursor- pointer"
                  href="https://developers.google.com/community/gdsc"
          target="_blank"
          rel="noreferrer"
              >
                  <img src={pvgcos} alt="logo" className="w-[220px]" />
        </a>
      </div>
    </div>
  )
}

export default Partners
