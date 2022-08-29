import { useEffect, useState } from 'react'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection } from '@firebase/firestore';
import { getDocs } from 'firebase/firestore';


function Approval() {
  const [user, loading]: any = useAuthState(auth)
  // const equipment = collection(db, 'register')
  // const snapshot = await getDocs(equipment);
  // console.log(snapshot)
  // let [result,setResult]:any = useState([])
  const [result,setResult]:any = useState([])
  const getData = async() => {
      let temp:any = []
      const registered = collection(db, 'register')
      const snapshot = await getDocs(registered);
      // let resultx:any = []
      await snapshot.docs.map(doc => {temp.push(doc.data())});
      console.log(result)
      setResult(temp)
      // setResult(resultx)
      // result = await [{name:"Tushar 1", status:"trial"},{name:"Tushar 2", status:"trial"}]
      // result = await results
  }
useEffect(()=>{
  getData();
  // console.log(result);
  

},[])
  return (
   <div className='contain'>
     <table className="table table-borderless table-hover ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    
      {result.map((item,index)=>{
        // console.log(item);
        
          return (<tr>
            <th scope="row">{index}</th>
            <td key={index}>{item.name}</td>
            <td key={index}>{item.organization}</td>
                  </tr>)
      })}
    
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td> 
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
  
    </table>
   </div>
  )
}

export default Approval