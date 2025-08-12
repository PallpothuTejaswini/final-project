import { Route,Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import { useState,useEffect} from 'react';
import axios from 'axios';
import AddForm from './components/AddForm';
//import { useParams } from 'react-router-dom';
//Complexity is 14 You must be kidding


function App() {
  //const navigate=useNavigate();
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    const getUsers = async ()=>
    {
try{
  const response= await axios.get("https://688322fc21fa24876a9ccd2a.mockapi.io/todos")
  //const data=response.data;
  //console.log(response);
  setTodos(response.data);
  console.log(response);
}
catch{
  console.log("Error");
}
    }  
    getUsers();
},[])
    
   
const deleteTask=(id)=>{
   try{
            const response=axios.delete(`https://688322fc21fa24876a9ccd2a.mockapi.io/todos/${id}`);
            //console.log(response.data);
            console.log(response);
            const updatedTodos=todos.filter(todo=>todo.id!==id);
            setTodos(updatedTodos);
        }
        catch(err){
            console.log(err);
        }
}
//const editTask=(id)=>
  //try{
 // const response=axios.delete(`https://688322fc21fa24876a9ccd2a.mockapi.io/todos/${id}`);
  //const editTask=editTask(name);
            //console.log(response.data);
            //console.log(response);
            //const updatedTodos=todos.filter(todo=>todo.id!==id);
            //setTodos(updatedTodos);
       // }
       // catch(err){
           // console.log(err);
        //}
 //}




  //const login=()=>
 //{
   //navigate('/dashboard')
 // }
    return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/welcome' element={<Welcome/>}></Route>
        <Route path='/' element= {<Home todos={todos} deleteTask={deleteTask}/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/addTask' element={<AddForm setTodos={setTodos}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
