import Countdown from '../Countdown/Countdown'
import logo from '../../Images/logo.png'
import soon from '../../Images/coming_soon.svg'
import ComingSoon from '../../Images/cs-f1.svg'
import ComingSoonMobile from '../../Images/cs-f1m.svg'
import GoogleCloudLogo from '../../Images/google-cloud-logo.svg'
import LinkedInIcon from '../../Images/linkedin-icon.svg'
import TwitterIcon from '../../Images/twitter-icon.svg'
import YoutubeIcon from '../../Images/youtube-icon.svg'
import InstagramIcon from '../../Images/insta-icon.svg'
import useWindowSize from '../../Hooks/useWindowSize'

const Hero = () => {
  const size = useWindowSize()
  return (
    <>
      {size.width != null && size.width > 600 ? (
        <>
          <img src={ComingSoon} className=" m-auto h-screen" />
          <div className=" absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
            <img src={GoogleCloudLogo} className="h-10" />
            <div className="font-black my-2 text-center text-3xl md:text-5xl text-theme-blue-color">
              Community Day Pune 2023
            </div>
            <div className="font-sans text-center text-theme-blue-color font-medium">
              Coming Soon...
            </div>
          </div>
          {/* <img src={ComingSoonMobile} className=' m-auto h-screen'/> */}
          <div className=" absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center">
            <div className="font-sans font-semibold mb-5 text-center">
              Follow our socials to stay updated
            </div>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/company/gdg-cloud-pune/">
                <img src={LinkedInIcon} className=" h-10 ml-4 mr-2" />
              </a>
              <a href="https://twitter.com/gdgcloudpune">
                <img src={TwitterIcon} className=" h-10 mx-2" />
              </a>
              <a href="https://www.youtube.com/@gdgcloudpune9722">
                <img src={YoutubeIcon} className=" h-10 mx-2" />
              </a>
              <a href="https://www.instagram.com/gdgcloudpune/">
                <img src={InstagramIcon} className=" h-10 mx-2" />
              </a>
              <a href="https://sessionize.com/gccd23/">
                <div className=" h-10 mr-4 ml-2 bg-black px-5 py-2 text-white rounded-full">
                  Call for Speakers
                </div>
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <img src={ComingSoon} className=" m-auto h-screen" /> */}
          <img src={ComingSoonMobile} className=" m-auto h-screen" />
          <div className=" absolute bottom-0 top-0 left-0 right-0 flex flex-col items-center justify-center">
            <img src={GoogleCloudLogo} className="h-6" />
            <div className="font-extrabold my-2 text-center text-2xl text-theme-blue-color">
              Community Days Pune 2023
            </div>
            <div className="font-sans text-center text-theme-blue-color font-medium">
              Coming Soon...
            </div>
            <div className="font-sans font-semibold mt-10 mb-5 text-center">
              Follow our socials to stay updated
            </div>
            <div>
              <div className="flex justify-center">
                <a href="https://www.linkedin.com/company/gdg-cloud-pune/">
                  <img src={LinkedInIcon} className=" h-10 ml-4 mr-2" />
                </a>
                <a href="https://twitter.com/gdgcloudpune">
                  <img src={TwitterIcon} className=" h-10 mx-2" />
                </a>
                <a href="https://www.youtube.com/@gdgcloudpune9722">
                  <img src={YoutubeIcon} className=" h-10 mx-2" />
                </a>
                <a href="https://www.instagram.com/gdgcloudpune/">
                  <img src={InstagramIcon} className=" h-10 mr-4 ml-2" />
                </a>
              </div>
              <a href="https://sessionize.com/gccd23/">
                <div className="bg-black text-center py-2 text-white rounded-full mt-4">
                  Call for Speakers
                </div>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Hero
