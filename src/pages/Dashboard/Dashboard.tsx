import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import Title from '../../Components/Title/Title'

const Dashboard = () => {
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
          // navigate('/ccd2022/dashboard')
        } else {
          // console.log('No such document!')
          // navigate('/ccd2022/rsvp')
        }
      }
    }

    async function TicketID() {
      if (applied) {
        const docRef = doc(db, 'tickets', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          if (docSnap.data().conference || docSnap.data().workshop) {
            setTicket(true)
          } else {
            setTicket(false)
          }
        } else {
          console.log('No such document!')
        }
      }
    }

    if (user) {
      DocumentID()
    }

    if (applied) {
      TicketID()
    }
  }, [user, loading, applied])

  const bypass = true;

  return (
    <>
      <div
        className="w-full max-w-7xl items-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:pt-28 lg:pb-[62px] px-4"
        id="home-grid"
      >
        <div className="w-full mb-16">
          <div>
            <div className="text-3xl text-g-gray-8 mb-8 font-light">Dashboard</div>
            <hr />
            <div className="w-full">
              {user ? (
                applied ? (
                  rejected ? (<>
                    Oops, we could not find a seat for you this time. However, we would love to see you attend it virtually! <br /> Virtual Event applications starting soon!
                  </>
                  ) : ticket ? (<>
                    Congratulations on making it through hundreds of applications! <br />
                    We look forward to see you at the Cloud Community Days. <br /><br />
                    <button
                      className="transition ease-in-out bg-red-500 duration-300 text-white h-fit w-fit text-base py-2 px-4 rounded"
                      onClick={() => navigate('/ccd2022/tickets')}
                    >
                      View Tickets
                    </button>
                  </>
                  ) : (<>
                    <p className="text-2xl fw-bold">Thank you for applying to be a part of<p className="text-g-blue-3 d-inline"> Cloud Community Days </p>Pune 2022.</p>
                    <p className="text-lg">
                      We will review your application and update its status on the website soon.<br/>
                      We shall also send you an email when we close the review of all applications with your application's status.
                    </p>
                  </>
                  )
                ) : (
                  <>
                    <section className="max-w-screen-xl mx-auto py-4 px-4 sm:px-8">
                      <div className="max-w-xl">
                        <div className="py-4">
                          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                            Be a part of the <span className="text-indigo-600">largest developer conference</span> of Western India
                          </h3>
                          <p className="text-gray-500 leading-relaxed mt-3">
                            Entry to Cloud Community Days Pune 2022 is only via application. Please apply at the earliest to nominate yourself for a ticket.
                          </p>
                        </div>
                        <Link
                          className="cta-pr-btn px-4 py-2 text-indigo-600 no-underline font-medium bg-indigo-50 rounded-full inline-flex items-center"
                          to="/ccd2022/rsvp">
                          Apply Now
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>

                    </section>
                  </>
                )
              ) : (<></>
              )
              }
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
