import React from "react";
import "./App.css";
import data from "./data.json";

const Exp = (props) => {
  let {state,setStp}= props;

  function handelChange(e){
    setStp(e.target.value)
  }
  return (
    <>
      <h2>Phone No: {state}</h2>

<input name="phone" onChange={handelChange}></input>
{/*
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            <p>{item.age}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
        */}
    </>
  );
};

export default Exp;
