import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getDoc, doc } from 'firebase/firestore'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
// import {QRCodeSVG} from 'qrcode.react';
// import { QRCode } from 'react-qrcode-logo';
// import Title from '../../Components/Title/Title'
// import ReactDOM from 'react-dom';
// import gdg from '../../Images/qr.png'
// import logo from '../../Images/logo.png'

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
      <div className="flex flex-col lg:flex-row my-0 lg:justify-center items-center ">
      <div className="m-4 flex flex-col items-center bg-gray-100 rounded-lg border shadow-md md:flex-row max-w-sm md:max-w-xl hover:bg-gray-200">
                <img
                  className="object-cover w-full max-h-screen border rounded-l-lg md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
                  src={PassTicket}
                  alt="Workshop Pass"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Event Pass
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    &#128197; 24 September, 2022 <br />
                    &#128205; Conrad, Pune
                  </p>
                  <a
                    href={PassTicket}
                    target="_blank"
                    rel="noopener noreferrer" 
                    download={PassTicket}
                    className="px-6 py-2 text-center text-white no-underline bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Download
                  </a>
                  <br />
                  <span>
                    Share the news with your friends, use hashtags #CCDPune and
                    #CloudCommunityDays, tag us with @gdgcloudpune (
                    <a target="_blank"
                    rel="noopener noreferrer" href="https://twitter.com/gdgcloudpune">Twitter</a>,{' '}
                    <a target="_blank"
                    rel="noopener noreferrer" href="https://www.linkedin.com/company/gdg-cloud-pune/">
                      LinkedIn
                    </a>
                    ) and stand a chance to win exclusive goodies! 🎉
                  </span>
                </div>
              </div>
    

           
          </div>            
      
      <br />
      <br />
      </div>
    </div>
    </>
  )
}

export default Tickets
