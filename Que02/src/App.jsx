import './App.css';
import { useState } from 'react';

function App(){
  let [digit,setChangeDigit] = useState(0);
  return(
    <>
    <h1>PW-Skills React JS-Assignment02 Que02</h1>
    <div className='btnContainer'>
      <button onClick={()=>{
        digit++;
      setChangeDigit(digit)
      }}>Increment</button>
      <button onClick={()=>{
        digit--
        setChangeDigit(digit)
      }}>Decrement</button>
    </div>
    <p>Counter is: <span>{digit}</span></p>
    </>
  )
}

export default App