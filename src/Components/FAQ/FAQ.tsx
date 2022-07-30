import { useState } from 'react'

const FAQ = () => {
  const [selectedfaq, setSelectedfaq] = useState<number>(5)
  const openAQuestion = (index) => {
    setSelectedfaq(index)
  }
  const questionClickHandler = (index) => {
    if (selectedfaq === index) {
      setSelectedfaq(5)
    } else {
      openAQuestion(index)
    }
  }

  return (
    <div className="flex gap-8 flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-0">
      <div className="w-fit lg:w-2/5">
        <div className="text-3xl font-light text-g-blue-3 mb-4">FAQ</div>
        <div className="text-base text-g-gray-7">Need Answers?</div>
        <div className="text-base text-g-gray-7">
          Find them here. <br />
          <div className="mt-2 w-fit lg:w-3/5">
            For any queries related to sponsorship, please reach out to us at{' '}
            <a className="no-underline" href="mailto:partners@gdgcloud.kolkata.dev">
              partners@gdgcloud.kolkata.dev
            </a>
            . Any question related to participation can be asked at{' '}
            <a className="no-underline" href="mailto:gdgcloudkol@gmail.com">
              gdgcloudkol@gmail.com
            </a>
            .
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto space-y-2">
        <div
          className="item bg-g-gray-1 border-1 border-g-gray-2 rounded-md p-3 text-g-gray-7 hover:text-g-gray-9 hover:bg-g-gray-2"
          onClick={() => {
            questionClickHandler(0)
          }}
        >
          <div className="flex items-center cursor-pointer ">
            <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg  font-light">
              <span>What is CCD 2022 Kolkata?</span>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-all  duration-700"
            style={selectedfaq === 0 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
          >
            <div className="text-gray-700   pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
              <div>
                CCD 2022 Kolkata is short form of Cloud Community Days 2022 Kolkata
                which is among the largest free Cloud developer conferences in
                Eastern India.
              </div>
            </div>
          </div>
        </div>
        <div className="item border-1 border-g-gray-2 rounded-md p-3 text-g-gray-7 hover:text-g-gray-9 bg-g-gray-1  hover:bg-g-gray-2">
          <div
            onClick={() => {
              questionClickHandler(1)
            }}
            className="flex items-center cursor-pointer"
          >
            <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
              <span>Where can I find updates related to CCD 2022 Kolkata?</span>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-all  duration-700"
            style={selectedfaq === 1 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
          >
            <div className="text-gray-700 pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
              <div>
                <p className="mb-2 text-gray-500 ">
                  All announcements related to the event are posted to the GDG Cloud
                  Kolkata chapter mailing list which you can join by Joining the
                  chapter at -{' '}
                  <a href="https://gdg.community.dev/gdg-cloud-kolkata/">
                    GDG Cloud Kolkata Chapter Page
                  </a>
                  . You can receive the updates by following us on{' '}
                  <a href="https://twitter.com/gdgcloudkol">
                    Twitter (@gdgcloudkol)
                  </a>
                  ,{' '}
                  <a href="https://facebook.com/gdgcloudkol">
                    Facebook (@gdgcloudkol)
                  </a>
                  ,{' '}
                  <a href="https://instagram.com/gdgcloudkol">
                    Instagram (@gdgcloudkol)
                  </a>{' '}
                  or{' '}
                  <a href="https://www.linkedin.com/company/gdgcloudkol/">
                    LinkedIn (@gdgcloudkol)
                  </a>
                  . You can also join our{' '}
                  <a href="https://t.me/gdgcloudkol">Telegram group</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="item border-1 border-g-gray-2 rounded-md p-3 text-g-gray-7 hover:text-g-gray-9  bg-g-gray-1  hover:bg-g-gray-2">
          <div
            onClick={() => {
              questionClickHandler(2)
            }}
            className="flex items-center cursor-pointer"
          >
            <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
              <span>How can I attend CCD 2022 Kolkata? How much does it cost?</span>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-all  duration-700"
            style={selectedfaq === 2 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
          >
            <div className="text-gray-700   pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
              <div>
                CCD 2022 Kolkata is a Free event. There are no costs for the ticket
                to this event. However, you must apply to be a participant to the
                event and only upon a positive review of your application you shall
                be allowed to claim a ticket. You can apply to be a participant by
                clicking the "Reserve Your Seat" button on this website's home page.
              </div>
            </div>
          </div>
        </div>
        <div className="item border-1 border-g-gray-2 rounded-md p-3 text-g-gray-7 hover:text-g-gray-9  bg-g-gray-1  hover:bg-g-gray-2">
          <div
            onClick={() => {
              questionClickHandler(3)
            }}
            className="flex items-center cursor-pointer"
          >
            <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
              <span>
                I want to present a talk/workshop at the conference. What should I
                do?
              </span>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-all  duration-700"
            style={selectedfaq === 3 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
          >
            <div className="text-gray-700   pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
              <p className="mb-2 text-gray-500 ">
                You can submit your talk/workshop proposal on our{' '}
                <a href="https://sessionize.com/cloud-community-days">CFP Page</a>.
                The deadline for submitting CFP for this year’s conference is 12th
                August, however, the earlier you submit, more the chances of us
                reviewing your submission in depth.
              </p>
            </div>
          </div>
        </div>
        <div className="item border-1 border-g-gray-2 rounded-md p-3 text-g-gray-7 hover:text-g-gray-9  bg-g-gray-1  hover:bg-g-gray-2">
          <div
            onClick={() => {
              questionClickHandler(4)
            }}
            className="flex items-center cursor-pointer"
          >
            <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg font-light">
              <span>
                Will I be provided travel/stay accommodation to attend the event?
              </span>
            </div>
          </div>
          <div
            className="relative overflow-hidden transition-all  duration-700"
            style={selectedfaq === 4 ? { maxHeight: '240px' } : { maxHeight: '0px' }}
          >
            <div className="text-gray-700   pl-3 md:pl-4 lg:pl-6 py-2 space-y-3">
              <div>
                No. There is no provision for covering attendee travel/stay. For
                speakers, we will decide on case-by-case basis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
