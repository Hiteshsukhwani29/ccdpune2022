import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Loading from './Components/Loading/Loading'
import Navbar from './Components/Navbar/Navbar'
import Navigation from './pages/Navigation'

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return <div>{loading ? <Loading /> : <Page />}</div>
}
