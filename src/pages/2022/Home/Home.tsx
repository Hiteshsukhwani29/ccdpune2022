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
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../services/UserAuth'
import { useEffect, useState } from 'react'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth)
  return user ? <Component /> : <Navigate to="/ccd2022" replace />
}

const Home = () => {
  const location = useLocation()
  const getTab = (location) => {
    return location.pathname === '/ccd2022'
      ? location.hash === '#speaker_grid'
        ? 'Speakers'
        : 'Home'
      : location.pathname === '/ccd2022/sessions'
      ? 'Schedule'
      : ''
  }
  const [activeTab, setActiveTab] = useState(getTab(location))
  useEffect(() => {
    const tab = getTab(location)
    setActiveTab(tab)
  }, [location])
  const navigate = useNavigate()

  const navBarTabClickHandler = (tab) => {
    if (tab === 'Home') {
      setActiveTab('Home')
      if (location.pathname === '/ccd2022') {
        window.scrollTo(0, 0)
      } else {
        navigate('/ccd2022')
      }
    }
    if (tab === 'Speakers') {
      navigate('/ccd2022#speaker_grid')
      setActiveTab('Speakers')
      setTimeout(() => {
        document.getElementById('speakers-grid')?.scrollIntoView({
          behavior: 'smooth'
        })
      }, 500)
    }
    if (tab === 'Schedule') {
      setActiveTab('Schedule')
      navigate('/ccd2022/sessions')
      window.scrollTo(0, 0)
    }
  }
  return (
    <>
      <Navbar active={activeTab} handleClick={navBarTabClickHandler} />
      <Hero />
      <About />
      <Speakers />
      {/* <Team /> */}
      <Coc />
      <FAQ />
      <Sponsors />
      <Partners />
      <Footer />
    </>
  )
}

export default Home
