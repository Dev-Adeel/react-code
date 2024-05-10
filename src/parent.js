import React, {useEffect, useState} from 'react'

import SubFile from './SubFile';
// const Parent = () => {
  //     const[name,setName]=useState("ali"
//     )
//     console.log(name)
//   return (
  //     <div>
  //       This is a parent {name}
  //       <Child name={name}/>
  //     </div>
  //   )
  // }
  
  // parent.js
// const object={
//     Name: "Sahil",
//     designation :"Team lead" ,
//     Experiance: "4 years",
// }
// let localstorage=localStorage.setItem("object" )
// return(
  //     <div>
  //         This is a parent{object}
  //     </div>
  // )
  // export default Parent
  
  const Parent = () => {
    const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  },[data]);
  console.log(data,"this is your data")
  return(

      <div>
        {data.map((item)=>(
          <div style={{border: "2px solid black", marginTop:"1rem", backgroundColor : "yellow"}}>
            <p>This is your title data : {item.title}</p>
            <p>This is your body data: {item.body}</p>

            </div>
        ))}
         <h1>hello Team</h1>
         <p>this is Dev-Adeel</p>
         {/* <SubFile/> */}
      </div>
    ) 
  
}

export default Parent
