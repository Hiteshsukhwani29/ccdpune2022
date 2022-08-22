import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import {QRCodeSVG} from 'qrcode.react';
import { QRCode } from 'react-qrcode-logo';
import Title from '../../Components/Title/Title'
import ReactDOM from 'react-dom';
import gdg from '../../Images/qr.png'
import logo from '../../Images/logo.png'

const Tickets = () => {
  const [user, loading]: any = useAuthState(auth)
  const [applied, setApplied] = useState(false)
  const [conferencePassTicket, setConferencePassTicket] = useState('')
  const [workshopPassTicket, setworkshopPassTicket] = useState('')

  const navigate = useNavigate()

  const storage = getStorage()

  useEffect(() => {
    // if (loading) {
    //   // maybe trigger a loading screen
    //   return
    // }

    async function DocumentID() {
      console.log(user);
      
      if (user) {
        const docRef = doc(db, 'register', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setApplied(true)
          // navigate('/ccd2022/dashboard')
        } else {
          // console.log('No such document!')
          navigate('/ccd2022')
        }
      }
    }

    async function TicketID() {
      if (applied) {
        const docRef = doc(db, 'tickets', user.uid)
        const docSnap = await getDoc(docRef)
        if (true) {
          // console.log(docSnap.data().conference)
          const listRef = ref(storage, user.uid + '/')
          listAll(listRef)
            .then((res) => {
              res.items.forEach((itemRef) => {
                getDownloadURL(ref(storage, itemRef.fullPath))
                  .then((url) => {
                    if (itemRef.name.endsWith("conference_pass.png")) {
                      setConferencePassTicket(url)
                    }
                    else if (itemRef.name.endsWith("workshop_pass.png")) {
                      setworkshopPassTicket(url)
                    }
                  })
                  .catch((error) => {
                    console.log('error', error)
                  })
              })
            })
            .catch((error) => {
              console.log('error', error)
            })
        } else {
          console.log('No such document!')
          navigate('/ccd2022')
        }
      }
    }

    if (user) {
      DocumentID()
    }

    if (applied) {
      TicketID()
    }
  }, [user, loading, applied, storage])

  return (
    <>

      <div className="w-full max-w-7xl items-center justify-center flex flex-col lg:flex-row my-0 mx-auto gap-12 pt-20 lg:pt-28 lg:pb-[62px] px-4">
        <div className="w-full">
          <div className="text-5xl text-g-gray-8 mb-8 font-light">Tickets</div>
      <p className="mb-4 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        Congratulations on making it through hundreds of applications! <br />
        We look forward to see you at the Cloud Community Days.
      </p>
      {/* <p className="mb-8 lg:mb-16 font-light text-center text-red-600 sm:text-xl">
        Workshop passes will start rolling out from 5 August. <br />
        Check here after 5 August for your Workshop pass.
      </p> */}

      <p className="text-center">
                    Share the news with your friends, use hashtags #CCDPune and
                    #CloudCommunityDays, tag us with @gdgcloudpune (
                    <a 
                      target={'_blank'}
                      rel={'noreferrer'}
                      href="https://twitter.com/gdgcloudpune">Twitter</a>
                    ) and stand a chance to win exclusive goodies! 🎉
                  </p>

                  <div className="text-center">
      <a
                    href={conferencePassTicket}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2 text-center text-white no-underline bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Download
                  </a>
        <a className="btn btn-primary my-4" href="/ccd2022">
          Go Home
        </a>
      </div>

      <div className="flex flex-col lg:flex-row my-0 lg:justify-center items-center ">
        { false ? (
          <>
            
            {false ? (
              <div className=" bg-gray-100 rounded-lg border shadow-md md:flex-row max-w-sm md:max-w-xl hover:bg-gray-200">
                <div className='d-flex justify-center mt-4'>
                  {/* <QRCodeSVG
                  height={200}
                  width={200}
                  className="mx-2"
                  value={user.uid} /> */}
                  <QRCode 
                  logoWidth={70}
                  value={user.uid}
                  size={200}
                  logoImage={gdg} />,
                </div>

                <div className="justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Cloud Community Day <br /> Pune - 2022 
                  </h5>
                  <p className="mb-0 text-xl font-normal text-gray-700 fw-bold">
                    &#9654;   {user.displayName} <br />
                    &#128197; 24 September, 2022 <br />
                    &#128205; Conrad Pune
                  </p>
                  <br />
                  <div className="flex flex-col align-items-center" >
                    <p className="mb-1" >Organized by</p>
                    <img width={200} src={logo} alt="GDG Cloud Pune" />
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            
          </>
        ) : (
          <div className="w-full my-0 mx-auto py-48">
            <div className="flex justify-center items-center">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      </div>
    </div>
    </>
  )
}

export default Tickets
