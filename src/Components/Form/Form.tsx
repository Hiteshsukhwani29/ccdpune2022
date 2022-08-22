import Title from '../Title/Title'
import 'firebase/firestore'
import { useState,useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore'
import app from '../../services/firebase'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { encode as base64_encode } from 'base-64'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Forms = () => {
  // const [name, setName] = useState('')
  const regexpnum = new RegExp('^\\d{10}$');
  const [inputValues, setInputValue] = useState({
    fname: "",
    phone:"",
    pronoun:"",
    organization:"",
    city:"",
    about:"",
    linkedin:"",
    github:"",
    wpPhone:"",
    pccode:"",
    wccode:"",
  });
  const [validation, setValidation] = useState({
    fname: "",
    phone:"",
    pronoun:"",
    organization:"",
    city:"",
    about:"",
    linkedin:"",
    github:"",
    confirm:"",
    understand:"",
    wpPhone:"",
    pccode:"",
    wccode:"",
    diet:"",
  });
  function handleChange(name,value) {
    // console.log(name,value)
    // const { tname, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;
    const regexpnum = new RegExp('^[0-9]*/d{10}$');
    //first Name validation
    // if (!inputValues.fname.trim()) {
    //   errors.fname = "Name is required";
    // } 
    // else if(inputValues.fname.length<5){
    //   errors.fname = "Enter full name"
    // }
    // else {
    //   errors.fname = "";
    // }
    //Phone validation
    // if (!inputValues.phone.trim()) {
    //   errors.phone = "Phone Number is required";
    // } 
    // else if(!regexpnum.test(inputValues.phone)){
    //   console.log()
    //   errors.phone = "Enter Valid Phone Number!"
    // }
    // else if(inputValues.phone.length!=10){
    //   console.log(inputValues.phone.length)
    //   errors.phone = "Enter Valid Phone Number!"
    // }
    // else {
    //   errors.phone = "";
    // }
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

    // setValidation(errors);
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
  let [confirm, setConfirm] = useState('')
  // const [email, setEmail] = useState('');
  const [enrolled, setEnrolled] = useState('')
  const [blog, setBlog] = useState('')
  const [diet, setDiet] = useState('None')
  const [tsize, setTsize] = useState('S')
  let [understand, setUnderstand] = useState('')
  const [wpno, setwpNo] = useState('false')
  let [user]:any = useAuthState(auth)
  let navigate = useNavigate()
  // const docRef = doc(db, 'register', user.uid)
  // const docSnap = await getDoc(docRef)
  // if(docSnap.exists()){
  //   navigate('/ccd2022/dashboard')
  // }
  if (user) {
    var email = user.email
  }

  // Registration Event
  function RegistrationEvent(e, user) {
    e.preventDefault()
    if(validation.fname == "" && validation.phone == "" && validation.pccode == "" && validation.organization == "" && validation.city =="" && validation.about =="" && validation.linkedin =="" && validation.diet == "" && inputValues.fname != "" && diet != "None" && inputValues.phone != "" && inputValues.pccode != "" && inputValues.organization != "" && inputValues.city !="" && inputValues.about !="" && inputValues.linkedin !="" && (wpno == "true" || (validation.wpPhone == "" && inputValues.wpPhone != "" && validation.wccode == "" && inputValues.wccode != ""))){
    if(confirm == "true" && understand == "true"){
      if(wpno == "true"){
        inputValues.wpPhone = inputValues.phone;
        inputValues.wccode = inputValues.pccode;
      }
      confirm="yes"
      understand="yes"
      const gdgName = inputValues.fname.replace(" ","%20")
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
      pccode:inputValues.pccode,
      enrolled: enrolled,
      organization: inputValues.organization,
      city: inputValues.city,
      about: inputValues.about,
      LinkedIn: inputValues.linkedin,
      GitHub: inputValues.github,
      Blog: blog,
      diet: diet,
      tsize: tsize,
      understand: understand,
      wpPhone: inputValues.wpPhone,
      wccode: inputValues.wccode,
    })
      .then((docRef) => {
        fetch("https://api.u-smart.in/prod/gdgcc?name="+gdgName+"&mobile="+inputValues.wpPhone+"&ccode="+inputValues.wccode).then((res) => console.log(res.json));
        console.log('Document written with ID: ', docRef)
        console.log('done')
        navigate('/ccd2022/dashboard')
      })
      .catch((error) => {
        console.error('Error adding document: ', error)
      })
    console.log('hola')
    }else{
      console.log("not ticked")
    }}
    else{
      console.log("errored")
      alert("Please check all the fields")
      // console.log(validation)
    }
  }

  return (
    <>
      <Title heading="Application Form" />
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
                  placeholder="eg: John Doe"
                  required
                  onChange={(e) => {handleChange(e.target.name,e.target.value);
                    setValidation({...validation,fname:e.target.value ?(e.target.value.length>5 ? '' : 'Enter Full name'):"Name is Required"});
                    // setName(e.target.value)
                  }
                  }
                  // value={inputValues.fname}
                />
                {validation.fname && <p style={{ color: 'red' }}>{validation.fname}</p>}
                {/* {validation.fname && console.log(validation)} */}
              </div>
              <div>
                <label
                  htmlFor="pccode"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Country Code
                </label>
                <input
                  type="tel"
                  id="pccode"
                  name ="pccode"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="eg: +91"
                  required
                  onChange={(e) => {
                    handleChange(e.target.name,e.target.value);
                    setValidation({...validation,pccode:(e.target.value.trim() == "")?"Country code is Required":""});
                  }
                  // setName(e.target.value)
                  }
                />
                {(validation.pccode) && <p style={{ color: 'red' }}>{validation.pccode}</p>}
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
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4"
                  placeholder="eg: 7412589631"
                  required
                  onChange={(e) => {
                    handleChange(e.target.name,e.target.value);
                    setValidation({...validation,phone:e.target.value ?(regexpnum.test(e.target.value) ? '' : 'Enter Valid Phone Number!'):"Contact is Required"});
                  }
                  // setName(e.target.value)
                  }
                />
                {validation.phone && <p style={{ color: 'red' }}>{validation.phone}</p>}
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="is_wpNo"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={(e) => {
                    // console.log(e.target.value)
                    setwpNo(e.target.checked.toString())
                  }}
                />
                <label
                  htmlFor="is_wpNo"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Is this your whatsapp Number?
                </label>
              </div>
              <div >
                {wpno === "false" && <label
                  htmlFor="wccode"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Country Code
                </label>}
                {wpno === "false" && <input
                  type="tel"
                  id="wccode"
                  name ="wccode"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="eg: +91"
                  required
                  onChange={(e) => {
                    handleChange(e.target.name,e.target.value);
                    setValidation({...validation,wccode:(e.target.value.trim() == "")?"Country code is Required":""});
                  }
                  // setName(e.target.value)
                  }
                />}
                {(wpno === "false" && validation.wccode) && <p style={{ color: 'red' }}>{validation.wccode}</p>}
                {wpno === "false" && <label
                  htmlFor="wpPhone"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Whatsapp number
                </label>}
                {wpno === "false" && <input
                  type="tel"
                  id="wpPhone"
                  name ="wpPhone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mt-4"
                  placeholder="eg: 7412589631"
                  required
                  onChange={(e) => {
                    handleChange(e.target.name,e.target.value);
                    setValidation({...validation,wpPhone:e.target.value ?(regexpnum.test(e.target.value) ? '' : 'Enter Valid Phone Number!'):"Contact is Required"});
                  }
                  // setName(e.target.value)
                  }
                />}
                {(wpno === "false" && validation.wpPhone) && <p style={{ color: 'red' }}>{validation.wpPhone}</p>}
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
                  name="pronoun"
                  className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    setPronoun(e.target.value)
                  }
                }
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
                    // console.log(e.target.value)
                    setEnrolled(e.target.checked.toString())
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
                  name="organization"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="eg: Dunder Mifflin Paper Company, Inc."
                  required
                  onChange={(e) => {
                    handleChange(e.target.name,e.target.value);
                    setValidation({...validation,organization:(e.target.value.trim() == "")?"Organization is Required":""});
                    // setName(e.target.value)
                  }
                  }
                />
                {validation.organization && <p style={{ color: 'red' }}>{validation.organization}</p>}
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
                  name="city"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="eg: Pune"
                  required
                  onChange={(e) => {
                    handleChange(e.target.name,e.target.value);
                    setValidation({...validation,city:(e.target.value.trim() == "") ?"City is Required" : ""});
                  }
                }
                />
                {validation.city && <p style={{ color: 'red' }}>{validation.city}</p>}
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
                    // console.log(e.target.value)
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
                  name="about"
                  className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tell us about you in minimum 100 characters "
                  onChange={(e) => {handleChange(e.target.name,e.target.value);
                    setValidation({...validation,about:e.target.value ?(e.target.value.length> 100? '' : 'Please write about in minimum 100 characters'):"About is Required"});
                    // setName(e.target.value)
                  }}
                ></textarea>
                {validation.about && <p style={{ color: 'red' }}>{validation.about}</p>}
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
                  name="linkedin"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="eg:https://www.linkedin.com/in/johndoe/"
                  required
                  onChange={(e) => {handleChange(e.target.name,e.target.value);
                    setValidation({...validation,linkedin:e.target.value ?((e.target.value.substring(0,28) == "https://www.linkedin.com/in/") ? '' : 'Provide Valid Linkedin Profile'):"Linkedin Profile is Required"});
                    // setName(e.target.value)
                  }}
                />
                {validation.linkedin && <p style={{ color: 'red' }}>{validation.linkedin}</p>}
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
                  name="github"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="eg: https://github.com/johndoe"
                  required
                  onChange={(e) => {handleChange(e.target.name,e.target.value);
                    setValidation({...validation,github:e.target.value ?((e.target.value.substring(0,19) == "https://github.com/") ? '' : 'Provide a Valid Github Profile'):"Github Profile is Required"});
                    // setName(e.target.value)
                  }}
                />
                {validation.github && <p style={{ color: 'red' }}>{validation.github}</p>}
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
                  placeholder="eg:https://johndoe.com"
                  required
                  onChange={(e) => {
                    // console.log(e.target.value)
                    setBlog(e.target.value)
                  }}
                />
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
                    // console.log(e.target.value)
                    setValidation({...validation,diet:(e.target.value == "None")?"Diet is Required":""});
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
                {(diet=="None") && <p style={{ color: 'red' }}>Diet is required</p>}
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
                    // console.log(e.target.value)
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
                      // console.log(e)
                      setConfirm(e.target.checked.toString())
                      setValidation({...validation,confirm:(e.target.checked) ?"" : "Kindly agree to the Terms and Conditions"})
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
                  {validation.confirm && <p style={{ color: 'red' }}>{validation.confirm}</p>}
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
                      // console.log(e.target.value)
                      setUnderstand(e.target.checked.toString())
                      setValidation({...validation,understand:(e.target.checked) ?"" : "Kindly agree to Ticketing terms"})
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
                  {validation.understand && <p style={{ color: 'red' }}>{validation.understand}</p>}
                </div>
              </div>
              <button
                type="submit"
                onClick={(e) => RegistrationEvent(e, user)}
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
    </>
  )
}

export default Forms