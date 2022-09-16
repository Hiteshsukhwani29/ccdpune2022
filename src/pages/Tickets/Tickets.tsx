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
  const [PassTicket, setPassTicket] = useState('')

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
        let url = "https://api.gdgcloudpune.com/getStatus?collection=register&uid=" + user.uid
        // console.log(url)
        let response = await fetch(url).then((res) => {return res.json()} );
        if(response["status"] == "generated"){
          console.log(response["ticket"])
          setPassTicket(response["ticket"])
        }

        }
      }

    if (user) {
      DocumentID()
    }

    if (applied) {
      TicketID()
    }
  }, [user, loading, applied, storage, PassTicket])

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
                    href={PassTicket}
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

      
      <br />
      <br />
      </div>
    </div>
    </>
  )
}

export default Tickets
