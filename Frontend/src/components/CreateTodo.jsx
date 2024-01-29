import { useState } from "react";
import axios from "axios";
export function CreateTodo()
{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    const addTodo=(e)=>{
        console.log("in add todo");
        const newData={"title":title,"description":description};
        axios.post("http://localhost:3001/todo", newData);
            

    }
    return (
        <div>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}></input><br></br>
            <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}></input><br></br>
            <button onClick={addTodo} >Add a todo</button> 
        </div>
    );
}