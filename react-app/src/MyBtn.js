import React from 'react'
import { useState } from 'react'

export default function MyBtn() {
    const [num,setNum] = useState(0);
  return (
    <div>
      <button onClick={()=>{
        setNum(num+1);
      }}>Inc</button>
      {num}
      <button onClick={()=>{
        if(num>0){
        setNum(num-1);
        }
      }}>Dec</button>
    </div>
  )
}
