import React, { useState } from 'react'

function Input({SetInputval}) {
   const [inputval,Setinputval]=useState("")
   const changeinput=(e)=>{
    Setinputval(e.target.value)
    SetInputval(e.target.value)
   }
  return (
    <div>
      <input  className="bg-transparent"type="text" placeholder='Search Location' value={inputval}
      onChange={changeinput}
      />
      
    </div>
  )
}

export default Input
