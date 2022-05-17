import React from 'react'

export const Counter = (props) => {

    const [count, setCount]= React.useState(props.initial)
let red ={
    color:"red"
}
let green ={
    color:"green"
}

  return (
      <div className='App'>
    <h1 style={count%2!==0 ? red : green}>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count*2)}>Double</button>
    <button onClick={()=>{if(count>0) setCount(count-1)}}>Decrement</button>
      </div>
  )
}
