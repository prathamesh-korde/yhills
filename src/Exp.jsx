import React from "react";
import './App.css';
import data from './data.json';

const Exp = (props) =>{

    const person = {
        name:"pratham",
        age:21
    }
    const stu = [1,2,3,4,5,9,10]
    //const {name} = props;
    return(
        <>
        <h1>{person.name}</h1>
        
       {/* {
            stu.map((itm,index)=>
                <p key={index}>{itm}</p>
            )
        }
            */}
            {
                data.map((item,index)=>{
                    return(
                    <div key={index}>  
                        <h1>{item.name}</h1>
                        <p>{item.email}</p>
                        <p>{item.age}</p>
                    </div>
                )}
            )
            }
        </>
    )
}

export default Exp;