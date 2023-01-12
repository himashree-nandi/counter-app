import React, { useState } from 'react'

export default function CounterApp() {
    const[count,setCount]=useState(0)
  return (
    <div><h1>Counter App</h1>
    <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increase</button>
    <p>{count}</p>
    <button className='btn btn-warning'onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
