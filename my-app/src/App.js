import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {

  const [userof, setuserof]=useState()

  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{ console.log ("res=>", res.data)

   setuserof (res.data)})

    .catch(err=>console.log(err))}, [])
   
  return (
    <div>
    {userof.map((el)=>(< Ul elment={el}    />))}
    </div>
  );
}

export default App;
