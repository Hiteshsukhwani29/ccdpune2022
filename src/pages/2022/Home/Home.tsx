//import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../../Components/2022/Hero/Hero'
import Speakers from '../../../Components/2022/Speakers/Speakers'
// import Team from '../../Components/Teams/Teams'
//import Footer from '../../Components/Footer/Footer'
import FAQ from '../../../Components/2022/FAQ/FAQ'
import Sponsors from '../../../Components/2022/Sponsors/Sponsors'
import About from '../../../Components/2022/About/About'
import Coc from '../../../Components/2022/Coc/Coc'
import Partners from '../../../Components/2022/Partners/Partners'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      {/* <Team /> */}
      <Coc />
      <FAQ />
      <Sponsors /> 
      <Partners /> 
    </>
  )
}

export default Home
