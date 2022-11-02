import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (e) =>{
   // use console.log
   console.log("Input in #"+e.target.id+" is "+e.target.value);

  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={handleInput} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={handleInput}/>
      <br/>
    </div>
  )
}


export default App;
