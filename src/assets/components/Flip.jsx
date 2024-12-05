import React, { useState, useEffect } from 'react';

function Flip() {
    const [isFlipped, setIsFlipped] = useState(false);


    useEffect(()=>{
        const timer=setInterval(() => {
            setIsFlipped(prev=>!prev)
        }, 2000);

        return()=>clearInterval(timer);
    },[])
    return(
        <>
        
      <h1
        className={`text-3xl text-blue-600 font-bold transition-transform duration-700 transform ${
          isFlipped ? 'rotate-x-180' : ''
        }`}
      >
       Weather
      </h1>
  
        </>
    );
}
export default Flip;
