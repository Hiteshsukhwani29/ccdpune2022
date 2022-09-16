import Countdown from '../../Components/Countdown/Countdown'
import logo from '../../Images/logo.png'
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
        let url = "https://api.gdgcloudpune.com/getStatus?collection=register&uid=" + user.uid
        // console.log(url)
        let response = await fetch(url).then((res) => {return res.json()} );
        if(response["status"] == "rejected"){
          setRejected(true)
        }
        else if(response["status"] == "generated"){
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
        className="w-full max-w-7xl items-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:pt-28 lg:pb-[62px] px-4"
        id="home-grid"
      >
        <div className="w-full lg:w-1/2">
          <div>
            <p className="text-4xl font-normal text-g-blue-3 mb-6">
              Cloud Community Days 2022
            </p>
            <p className="text-base mb-0">
              A community organized cloud conference with industry experts presenting
              on exciting topics! Cloud Community Day is powered by a shared belief
              that when developers come together to exchange ideas, amazing things
              can happen.
            </p>
            <p className="text-base pt-4 mb-0 ">Organized By :</p>
            <img className="py-2 w-2/4" src={logo} alt="Logo" />
            <p className="text-dark text-lg">
              Date: 24<sup className="mr-0.5">th</sup>September
            <p 
            className="text-dark text-lg">
              Venue: <a 
              className="no-underline" 
              target={"_blank"}
              rel={"noreferrer"}
              href="https://g.page/ConradPune?share">
              
                Conrad Pune</a></p>
            </p>
            <div className="lg:w-fit md:w-full grid grid-cols-1 lg:grid-cols-1 gap-x-4 gap-y-3">
              {user ? (
                applied ? (
                  rejected ? (
                    <button className="transition ease-in-out bg-black duration-300 text-white h-fit w-fit text-base py-2 px-4 rounded">
                      Not Selected
                    </button>
                  ) : ticket ? (
                    <button
                      className="transition ease-in-out bg-red-500 duration-300 text-white h-fit w-fit text-base py-2 px-4 rounded"
                      onClick={() => navigate('/ccd2022/tickets')}
                    >
                      View Tickets
                    </button>
                  ) : (
                    <button className="transition ease-in-out bg-yellow-500 duration-300 text-white h-fit w-fit text-base py-2 px-4 rounded"
                    onClick={() => navigate('/ccd2022/dashboard')}>
                      Under Review
                    </button>
                  )
                ) : (
                  <button
                    className="transition ease-in-out bg-yellow-500 duration-300 text-white h-fit w-fit text-base py-2 px-4 rounded"
                    onClick={() => navigate('/ccd2022/rsvp')}
                  >
                    Apply for Ticket
                  </button>
                )
              ) : (
                <button
                  className="transition ease-in-out bg-blue-500 hover:bg-blue-600 duration-300 text-white h-fit w-fit text-base py-2 px-4 rounded"
                  onClick={signInWithGoogle}
                >
                  Reserve Your Seat
                </button>
              )}

              <p className='text-dark mb-0 text-lg'>Want to be a speaker? Click the button below.</p>
              <a
                className="transition ease-in-out  bg-gray-500 duration-300 text-center w-fit rounded disabled"
                // href="https://sessionize.com/ccd-pune"
                rel={"noreferrer"}
                target={'_blank'}
                aria-disabled={true}
              >
                <button className="text-white bg-green-600 h-fit w-fit text-base py-2 px-4 btn rounded" disabled>
                  Call For Speakers Closed
                </button>
                
              </a>
            </div>
          </div>
        </div>

        <div className="w-full mb-3 lg:w-1/2 lg:mb-0 ">
          <Countdown />
        </div>
      </div>
                
    </>
  )
  
}

export default Hero
