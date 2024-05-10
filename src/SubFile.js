import React from 'react'

const SubFile = () => {
  return (
    <div>
      {data.data.map((item)=>(
          <div style={{border: "2px solid black", marginTop:"1rem", backgroundColor : "yellow"}}>
            <p>This is your title data : {item.title}</p>
            <p>This is your body data: {item.body}</p>

            </div>
        ))}
        
    </div>
  )
}

export default SubFile
