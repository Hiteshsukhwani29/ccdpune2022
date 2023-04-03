import Countdown from '../Countdown/Countdown'
import logo from '../../Images/logo.png'
import soon from '../../Images/coming_soon.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth, signInWithGoogle } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'

const Hero = () => {
  const [user, loading]: any = useAuthState(auth)
  const [applied, setApplied] = useState(false)
  const [ticket, setTicket] = useState(false)
  const [rejected, setRejected] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }

    async function DocumentID() {
      if (user) {
        const docRef = doc(db, 'register', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          if (docSnap.data().rejected === true) {
            setRejected(true)
          }
          setApplied(true)
          //navigate('/ccd2022/dashboard')
        } else {
          // console.log('No such document!')
          // navigate('/ccd2022/rsvp')
        }
      }
    }

    async function TicketID() {
      if (applied) {
        let url =
          'https://api.gdgcloudpune.com/getStatus?collection=register&uid=' +
          user.uid
        // console.log(url)
        let response = await fetch(url).then((res) => {
          return res.json()
        })
        if (response['status'] == 'rejected') {
          setRejected(true)
        } else if (response['status'] == 'generated') {
          setTicket(true)
        }

        // console.log(response["status"])
      }
    }

    if (user) {
      DocumentID()
    }

    if (applied) {
      TicketID()
    }
  }, [user, loading, applied])

  return (
    <>
      <div
        className="w-full items-center flex flex-col my-0 mx-auto gap-12 pt-20 lg:pt-28 lg:pb-[62px] px-4"
        id="home-grid"
      >
        <div className="w-3/4 lg:w-96 m-auto">
          <img src={soon} alt="Coming Soon" />
        </div>
        <div className='font-bold'>Coming soon</div>
      </div>
    </>
  )
}

export default Hero
