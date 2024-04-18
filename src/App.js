//react-js\myreactdev\src\App.js
import React from 'react';
import Student from './Student';
import Project from './Project';
import Login from './Login';
import Signup from './Signup';
import Frontpage from './Frontpage';
import Choice from './Choice';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'


function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}></Route>   
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/frontend' element={<Frontpage />}></Route>
      <Route path='/student' element={<Student />}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/choice' element={<Choice/>}></Route>
   
    </Routes>
  </BrowserRouter>

  )
}
export default App




