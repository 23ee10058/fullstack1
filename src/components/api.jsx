import React, { useEffect,useState } from 'react'


function Data() {
    
    const [data,setData] = useState()
    const fetchData = async  () =>{
        const response = await fetch("http://localhost:4000")
        const data2 = response.json()
        setData(data2)
    } 
    useEffect(()=>{
     fetchData()
    },[])
  return (
    <div>
      <p>{data?.name}</p>
      
    </div>
  )
}

export default Data