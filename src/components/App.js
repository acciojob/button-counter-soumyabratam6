
import React, { useState } from "react";
import './../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const[count,setCount]= useState(0);
  const handelOnclick = ()=>{
    setCount(count+1);
  }
  return (
    <div className="container">
        <p>Button clicked {count} times</p>
        <button type="button" class="btn btn-secondary" onClick={handelOnclick}>Click me</button>
    </div>
  )
}

export default App
