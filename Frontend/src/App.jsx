import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'
import axios from "axios";

function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    
     axios.get("http://localhost:3001/todos")
     .then(async (response) => {
       const data=await response.data;
       setTodos(data.Result);
      })
      .catch((error) => {
      console.error('Error fetching data:', error);
    })
  }, []);

  
  return (
    <div>
      Hi there this is a Todo App feel free to add your todos !
      <CreateTodo></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  )
} 

export default App
