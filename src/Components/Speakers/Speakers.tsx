import { useEffect, useState } from 'react'
import Socials from '../Socials/Socials'
import speakersData from './speakersData.json'

const Speakers = () => {
  const [speakersDetails, setSpeakersDetails] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData]: any = useState([])

  useEffect(() => {
    setSpeakersDetails(speakersData)
  }, [])

  //Api data
  
  /*useEffect(() => {
    fetch('https://sessionize.com/api/v2/61shkhfs/view/Speakers')
      .then((response) => response.json())
      .then((data) => {
        setSpeakersDetails(data)
      })
      .catch((error) => console.log(error))
  }, [])*/

  return (
    <>
      <div className="flex justify-center items-center flex-col px-5 pt-5">
        <div className="text-2xl lg:text-3xl font-normal text-g-gray-8">
          Our Amazing Speakers
        </div>
        <div className="text-base max-w-2xl w-fit text-center font-light text-g-gray-5 mt-2">
          Hear from the Professionals who are building the future of cloud. Our
          speakers are influential folks & allies who have been associated with
          communities within their organisations, cities, country and beyond.
        </div>
      </div>
      <div
        className="grid 
        sm:grid-cols-1 md:grid-cols-3 grid-flow-row place-items-center p-5 lg:grid-cols-4  gap-4 max-w-7xl mx-auto "
        style={{ gridAutoRows: '1fr' }}
        id="speakers-grid"
      >
        {speakersDetails.map((speaker, id) => (
          <div
            key={id}
            className="flex w-full h-full flex-col rounded-2xl items-center border border-g-gray-8 p-4 transform hover:-translate-y-2 hover:shadow-xl transition duration-300"
            onClick={() => {
              setModalData(speaker)
              setShowModal(true)
            }}
          >
            <img
              style={{
                borderStyle: 'solid',
                borderWidth: '4px',
                borderColor: '#4C8EF5'
              }}
              className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
              src={speaker.profilePicture}
              alt=""
            />
            <div className="text-lg font-light mt-4 text-center">
              {speaker.fullName}
            </div>
            <div className="text-sm font-light mt-2 text-center">
              {speaker.tagLine}
            </div>
            <Socials links={[...speaker?.links]} />
          </div>
        ))}
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col md:w-full bg-white outline-none focus:outline-none mx-2 md:mx-0 top-[100px] md:top-0">
                  <div className="flex items-center p-4 lg:flex-row flex-col-reverse justify-between border-b border-solid border-slate-200 ">
                    <div className="w-fit rounded-t">
                      <div className="text-3xl lg:w-fit w-full font-normal text-center">
                        {modalData.fullName}
                      </div>
                      <div className="text-sm w-full max-w-sm text-g-gray-7 mt-2">
                        {modalData.tagLine}
                      </div>
                    </div>
                    <div>
                      <img
                        className="rounded-full mx-auto w-28 h-28"
                        src={modalData.profilePicture}
                        alt="profile"
                      />
                    </div>
                  </div>

                  <div className="relative px-6 py-2 flex-auto">
                    <p className="my-2 text-g-gray-5 font-light text-base leading-relaxed">
                      {modalData.bio}
                    </p>
                    <div className="pt-10">
                      <Socials
                        links={[...modalData?.links]}
                        className="absolute bottom-4"
                      />
                    </div>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default Speakers
