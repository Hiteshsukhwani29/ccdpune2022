import Title from '../Title/Title'
import 'firebase/firestore'
import { useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import app from '../../services/firebase'
import { auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { encode as base64_encode } from 'base-64'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Forms = () => {
  // const [name, setName] = useState('')
  const [inputValues, setInputValue] = useState({
    fname: "",
    phone:"",
  });
  const [validation, setValidation] = useState({
    fname: "",
    phone:"",
  });
  function handleChange(name,value) {
    console.log(name,value)
    // const { tname, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;
    const regexpnum = new RegExp('^[0-9]*$');
    //first Name validation
    if (!inputValues.fname.trim()) {
      errors.fname = "First name is required";
    } 
    else if(inputValues.fname.length<5){
      errors.fname = "enter full name"
    }
    else {
      errors.fname = "";
    }
    //Phone validation
    if (!inputValues.phone.trim()) {
      errors.phone = "Contact is required";
    } 
    else if(!regexpnum.test(inputValues.phone)){
      console.log()
      errors.phone = "enter Correct Number"
    }
    else if(inputValues.phone.length!=10){
      console.log(inputValues.phone.length)
      errors.phone = "10 digit number"
    }
    else {
      errors.phone = "";
    }
    //last Name validation
    // if (!inputValues.lName.trim()) {
    //   errors.lName = "Last name is required";
    // } else {
    //   errors.lName = "";
    // }

    // email validation
    // const emailCond =
    //   "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    // if (!inputValues.email.trim()) {
    //   errors.email = "Email is required";
    // } else if (!inputValues.email.match(emailCond)) {
    //   errors.email = "Please ingress a valid email address";
    // } else {
    //   errors.email = "";
    // }

    //password validation
    // const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    // const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    // const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    // const password = inputValues.password;
    // if (!password) {
    //   errors.password = "password is required";
    // } else if (password.length < 6) {
    //   errors.password = "Password must be longer than 6 characters";
    // } else if (password.length >= 20) {
    //   errors.password = "Password must shorter than 20 characters";
    // } else if (!password.match(cond1)) {
    //   errors.password = "Password must contain at least one lowercase";
    // } else if (!password.match(cond2)) {
    //   errors.password = "Password must contain at least one capital letter";
    // } else if (!password.match(cond3)) {
    //   errors.password = "Password must contain at least a number";
    // } else {
    //   errors.password = "";
    // }

    //matchPassword validation
    // if (!inputValues.confirmPassword) {
    //   errors.confirmPassword = "Password confirmation is required";
    // } else if (inputValues.confirmPassword !== inputValues.Password) {
    //   errors.confirmPassword = "Password does not match confirmation password";
    // } else {
    //   errors.password = "";
    // }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [pronoun, setPronoun] = useState('he/him')
  const [role, setRole] = useState('Architect')
  // const [experience, setExperience] = useState('false');
  const [confirm, setConfirm] = useState('')
  // const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('')
  const [enrolled, setEnrolled] = useState('')
  const [organization, setOrganization] = useState('')
  const [city, setCity] = useState('')
  const [about, setAbout] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [github, setGithub] = useState('')
  const [blog, setBlog] = useState('')
  const [workshop, setWorkshop] = useState('false')
  const [conference, setConference] = useState('false')
  const [diet, setDiet] = useState('None')
  const [tsize, setTsize] = useState('S')
  const [understand, setUnderstand] = useState('')
  const [user] = useAuthState(auth)
  let navigate = useNavigate()
  if (user) {
    var email = user.email
  }

  // Registration Event
  function RegistrationEvent(e, user) {
    e.preventDefault()
    const db = getFirestore(app)
    // const encodedEmail = base64_encode(email)
    setDoc(doc(db, 'register', user.uid), {
      name: inputValues.fname,
      pronoun: pronoun,
      role: role,
      // experience: experience,
      confirm: confirm,
      email: email,
      contact: inputValues.phone,
      enrolled: enrolled,
      organization: organization,
      city: city,
      about: about,
      LinkedIn: linkedin,
      GitHub: github,
      Blog: blog,
      workshop: workshop,
      conference: conference,
      diet: diet,
      tsize: tsize,
      understand: understand
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef)
        console.log('done')
        navigate('/ccd2022/dashboard')
      })
      .catch((error) => {
        console.error('Error adding document: ', error)
      })
    console.log('hola')
  }

  return (
    <>
      <Title heading="Application Form" />
      <form>
        <section className="bg-white">
          <div className="pb-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
              Complete your participant application here and wait for us to get back
              to you on your application status!
            </p>
            <form className="space-y-8" id='registrationForm'
              action='#'
              onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fname"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="John Doe"
                  required
                  onChange={(e) => handleChange(e.target.name,e.target.value)
                    // setName(e.target.value)
                  }
                  // value={inputValues.fname}
                />
                {validation.fname && <p>{validation.fname}</p>}
                {/* {validation.fname && console.log(validation)} */}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name ="phone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="9000000000"
                  required
                  onChange={(e) => handleChange(e.target.name,e.target.value)
                    // setName(e.target.value)
                  }
                />
                {validation.phone && <p>{validation.phone}</p>}
              </div>
              <div>
                <label
                  htmlFor="pronoun"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Preferred pronoun
                </label>
                <select
                  id="pronoun"
                  className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setPronoun(e.target.value)
                  }}
                >
                  <option value="he/him">he/him</option>
                  <option value="she/her">she/her</option>
                  <option value="they/them">they/them</option>
                  <option value="Decline to specify">Decline to specify</option>
                </select>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="is_student"
                  type="checkbox"
                  value="yes"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setEnrolled(e.target.value)
                  }}
                />
                <label
                  htmlFor="is_student"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Are you currently enrolled in a full-time undergraduate academic
                  course?
                </label>
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Organization/College
                </label>
                <input
                  type="text"
                  id="organization"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Dunder Mifflin Paper Company, Inc."
                  required
                  onChange={(e) => {
                    console.log(e.target.value)
                    setOrganization(e.target.value)
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Current City
                </label>
                <input
                  type="text"
                  id="city"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Kolkata"
                  required
                  onChange={(e) => {
                    console.log(e.target.value)
                    setCity(e.target.value)
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Role
                </label>
                <select
                  id="role"
                  className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setRole(e.target.value)
                  }}
                >
                  <option value="Architect">Architect</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Data Engineer">Data Engineer</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Database Admin">Database Admin</option>
                  <option value="Designer">Designer</option>
                  <option value="Developer">Developer</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Machine Learning Engineer">
                    Machine Learning Engineer
                  </option>
                  <option value="Network Engineer">Network Engineer</option>
                  <option value="Other Role Not Listed">
                    Other Role Not Listed
                  </option>
                  <option value="Security Professional">
                    Security Professional
                  </option>
                  <option value="Speaker/hosting">
                    Speaker/hosting a session at this event
                  </option>
                  <option value="Student">Student</option>
                  <option value="SysAdmin">SysAdmin</option>
                  <option value="Technical Writer">Technical Writer</option>
                  <option value="Decline to specify">Decline to Specify</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  About you
                </label>
                <textarea
                  id="about"
                  rows={4}
                  className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="I own a light saber..."
                  onChange={(e) => {
                    console.log(e.target.value)
                    setAbout(e.target.value)
                  }}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="linkedin"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  id="linkedin"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="https://www.linkedin.com/in/johndoe/"
                  required
                  onChange={(e) => {
                    console.log(e.target.value)
                    setLinkedin(e.target.value)
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="github"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  GitHub Profile URL
                </label>
                <input
                  type="url"
                  id="github"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="https://github.com/johndoe"
                  required
                  onChange={(e) => {
                    console.log(e.target.value)
                    setGithub(e.target.value)
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Blog/Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="https://johndoe.com"
                  required
                  onChange={(e) => {
                    console.log(e.target.value)
                    setBlog(e.target.value)
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="event_parts"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  What parts of the event are you interested in?
                </label>
                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center">
                      <input
                        id="day1"
                        type="checkbox"
                        value="yes"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={(e) => {
                          console.log(e.target.value)
                          setWorkshop(e.target.value)
                        }}
                      />
                      <label
                        htmlFor="day1"
                        className="py-3 ml-2 w-full text-sm font-medium text-gray-900 "
                      >
                        Workshop - Day 1
                      </label>
                    </div>
                  </li>
                  <li className="w-full dark:border-gray-600">
                    <div className="flex items-center pl-8">
                      <input
                        id="day2"
                        type="checkbox"
                        value="yes"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={(e) => {
                          console.log(e.target.value)
                          setConference(e.target.value)
                        }}
                      />
                      <label
                        htmlFor="day2"
                        className="py-3 ml-2 w-full text-sm font-medium text-gray-900 "
                      >
                        Conference - Day 2
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <label
                  htmlFor="diet"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Dietary restrictions
                </label>
                <select
                  id="diet"
                  className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setDiet(e.target.value)
                  }}
                >
                  <option value="None">None</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-vegetarian">Non-vegetarian</option>
                  <option value="Eggetarian">Eggetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="tshirt"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  T-shirt size
                </label>
                <select
                  id="tshirt"
                  className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    console.log(e.target.value)
                    setTsize(e.target.value)
                  }}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="2XL">2XL</option>
                  <option value="3XL">3XL</option>
                </select>
              </div>
              <div className="flex">
                <div className="flex items-center h-5">
                  <input
                    id="tnc_checkbox"
                    aria-describedby="tnc_checkbox-text"
                    type="checkbox"
                    value="yes"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => {
                      console.log(e.target.value)
                      setConfirm(e.target.value)
                    }}
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="tnc_checkbox"
                    className="font-medium text-gray-900 "
                  >
                    Agree to Terms and Conditions?
                  </label>
                  <p
                    id="tnc_checkbox-text"
                    className="text-xs font-normal text-gray-500 "
                  >
                    I have read and agree to the GDG Event Participation Terms and
                    acknowledge that Google will use any information I provide in
                    connection with the Google Developer Group program and events in
                    accordance with Google’s Privacy Policy. I also agree to adhere
                    to the GDG event code of conduct for my attendance at any GDG
                    event, both in-person and online.
                  </p>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex items-center h-5">
                  <input
                    id="application_checkbox"
                    aria-describedby="application_checkbox-text"
                    type="checkbox"
                    value="yes"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => {
                      console.log(e.target.value)
                      setUnderstand(e.target.value)
                    }}
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="application_checkbox"
                    className="font-medium text-gray-900 "
                  >
                    Agree to ticketing terms?
                  </label>
                  <p
                    id="application_checkbox-text"
                    className="text-xs font-normal text-gray-500 "
                  >
                    Filling this form does not guarentee access to the event. The
                    details of my submission will be reviewed in all fairness
                    complying with the Code of Conduct of the event. On availability
                    of seats I shall be sent a Ticket Claim email which I must claim
                    within 72 hours from receiving the email, failing which my ticket
                    will be transferred to those on the waitlist and I can no longer
                    make any claim on it nor will show up to the event without a
                    confirmation ticket.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                // onClick={(e) => RegistrationEvent(e, user)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Submit
              </button>
              <button
                type="button"
                // onClick={() => navigate('/ccd2022')}
                className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancel
              </button>
            </form>
          </div>
        </section>
      </form>
    </>
  )
}

export default Forms