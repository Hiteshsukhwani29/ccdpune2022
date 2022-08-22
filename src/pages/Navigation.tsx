import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from 'react-router-dom'
import Home from './Home/Home'
import Forms from '../Components/Form/Form'
import { auth } from '../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Dashboard from './Dashboard/Dashboard'
import NotFound from './NotFound/NotFound'
import Tickets from './Tickets/Tickets'
import Sessions from './Schedule/Schedule'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useEffect, useState } from 'react'
import Approval from '../Components/approval/Approval'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user] = useAuthState(auth)
  return user ? <Component /> : <Navigate to="/ccd2022" replace />
}

export default function Navigation() {
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
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/approval" element={<Approval/>} />
        <Route
          path="/tickets"
          element={<PrivateRoute component={Tickets} />}
        />
        <Route path="/rsvp" element={<PrivateRoute component={Forms} />} />
        <Route path="/ccd2022" element={<Home />} />
        <Route path="/ccd2022/sessions" element={<Sessions />} />
        <Route path="/ccd2022/rsvp" element={<PrivateRoute component={Forms} />} />
        <Route
          path="/ccd2022/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route
          path="/ccd2022/tickets"
          element={<PrivateRoute component={Tickets} />}
        />
      </Routes>
      <Footer />
    </>
  )
}
