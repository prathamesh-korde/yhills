import React,{useState} from "react";
const ToDoList = () => {

    const[todos,setTodos] = useState([]);
    const [input,setInput] = useState("");

    function handelInput(e){
        setInput(e.target.value);
    }
    function handelSubmit(e){
        e.preventDefault();
        //spread operator
        setTodos([...todos,input])
    }
    
  return (
    <>
    <h1>To Do List</h1>

    <form>
        <label htmlFor='input'>Enter Task </label>
        <input type="text" id="input" onChange={handelInput}></input>
    </form>
    <br/>
    <br/>
    <button onClick={handelSubmit}>Submit</button>

    <div>
  {todos.map((item, index) => (
    <p key={index}>{item}</p>
  ))}
</div>

    </>
  )
}

export default ToDoList