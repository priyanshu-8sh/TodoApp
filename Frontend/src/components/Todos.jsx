import { useEffect } from "react";
import axios from "axios";
export function Todos({todos,setTodos}){
    
    console.log("hello i am in Todos",todos);
    const completeTodo=(todo)=>{
        if (!todo.completed) 
        {
            console.log("in complete TODO",todo._id);
            const newData={"id":todo._id};
            axios.put("http://localhost:3001/completed", newData)
            .then(async (response)=>
            {   
                const data=await response.data;
                todo.completed=true;
                setTodos([...todos],todo);
            });
            
        }
    }
    return (
        <div>
          {todos.map((todo) => {
            return (
            <div key={todo._id}>
              <h2>{todo.title}</h2>
              <h3>{todo.description}</h3>
              <button onClick={() => completeTodo(todo)}>{todo.completed==true ? "completed" : "Mark as complete"}</button>
            </div>)
          
          })}
        </div>
      );
}