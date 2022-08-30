import { useEffect, useMemo, useState } from 'react'
import { db, auth } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection } from '@firebase/firestore';
import { getDocs } from 'firebase/firestore';
import Pagination from '../Pagination/Pagination';
import { useNavigate } from 'react-router-dom';

let flag = 2;
let PageSize = 10;
function Approval() {
  const [user, loading]: any = useAuthState(auth)
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()
  // const equipment = collection(db, 'register')
  // const snapshot = await getDocs(equipment);
  // console.log(snapshot)
  // let [result,setResult]:any = useState([])
  const [result,setResult]:any = useState([])
  const getData = async() => {
    if(user){
      if(user.uid.toString() == "q5QPS0SFLPVajm327qP9oO9zRbp2" || user.uid.toString() == "8fOg5DQPp7SzoNS2XIpy4aflV1C3"){
        console.log(user.uid)
        let temp:any = []
        const registered = collection(db, 'register')
        const snapshot = await getDocs(registered);
        // let resultx:any = []
        await snapshot.docs.map(doc => {temp.push(doc.data())});
        console.log(temp)
        setResult(temp)
      }
      else{
        navigate('/ccd2022')
      }
    }
    else{
      navigate('/ccd2022')
    }
      
      // setResult(resultx)
      // result = await [{name:"Tushar 1", status:"trial"},{name:"Tushar 2", status:"trial"}]
      // result = await results
  }
useEffect(()=>{
  if(flag){
    getData();
    flag = flag - 1;
  }
  // getData();
  // console.log(result);
},[result])

const currentTableData = useMemo(() => {
  // if(flag2){
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    // flag2 = flag2 - 1;
    return result.slice(firstPageIndex, lastPageIndex);
  // }
}, [currentPage,result]);
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
      {currentTableData.map((item,index)=>{
          // console.log(item);
          return (<tr>
                    <th scope="row">{(currentPage - 1)*10 + index + 1}</th>
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
    <Pagination
    className="pagination-bar"
    currentPage={currentPage}
    totalCount={result.length}
    pageSize={PageSize}
    onPageChange={page => setCurrentPage(page)}>

    </Pagination>
   </div>
  )
}

export default Approval