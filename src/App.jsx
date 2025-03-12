import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home';
import Exp from './exp';
import Profile from './profile';
function App() {
  const userlogin = true;
  const [state,setState]=useState(1);

  function handelSubmit(){
    const input = document.getElementById('input').value;
    alert(input);
  }
  function inc(){
   setState(state*2)
  }

  function dec(){
    setState(state/2)
  }
  
  return (
    <>
    <p>{state}</p>
   <button onClick={inc}>increase</button>
   <br/>
   <br/>
   <button onClick={dec}>decrease</button>
   <br/>
   <br/>
   <input type="text" placeholder='enter your name'  className='main_input' id="input"/>
   <br/>
   <button className='main_input' onClick={handelSubmit}>Submit</button>
    
      {/*<Home name="portfolio"/>
      <Exp name ="prathamesh"></Exp>*/}
      {
      userlogin == true ? <Profile></Profile>  :<p>plese login !</p>
}
    </>
  );  
}

export default App
