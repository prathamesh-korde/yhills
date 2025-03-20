import { useState } from "react";
import "./App.css";
import Exp from "./exp";
import Profile from "./profile";

function App() {
  const userlogin = true;
  const [state, setStp] = useState("+917825486975");

  {/*
  function handleSubmit() {
    alert(`Step: ${step}, Name: ${name}`);
  }

  function inc() {
    if (!isNaN(step) && step !== 0) {
      setState(state * step);
    }
  }

  function dec() {
    if (step !== 0) {
      setState(state / step);
    } else {
      alert("Step value cannot be zero.");
    }
  }
  */}

  return (
    <>
    <p>{state}</p>
      <Exp state={state}  setStp ={setStp}/>
      <br />
{/*
      <input
        type="number"
        placeholder="Enter step value"
        className="stp"
        value={step}
        onChange={(e) => setStep(Number(e.target.value) || 1)}
      />
      <br />

      <p>{state}</p>

      <button onClick={inc}>Increase</button>
      <br />
      <br />
      <button onClick={dec}>Decrease</button>
      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your name"
        className="main_input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button className="main_input" onClick={handleSubmit}>
        Submit
      </button>

      {/* Conditional Rendering 
      {userlogin ? <Profile /> : <p>Please login!</p>}
      */}
    </>
  );
}

export default App;
