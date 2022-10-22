import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
   // use console.log
    if(event.target.type=='text')
     console.log(event.target.value);

     if(event.target.type=='number')
     console.log(event.target.value);
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={(e)=> handleInput(e) } />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'}  onChange={(e)=> handleInput(e) }/>
      <br/>
    </div>
  )
}


export default App;
