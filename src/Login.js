import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './college logo.png';

function Login(){
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')


const navigate=useNavigate()
const [errors,setErrors]=useState({})



const handleSubmit=(event)=>{
 
    event.preventDefault();
   setErrors(Validation({email,password}));
   if( errors.email===" " && errors.password===" "){
    axios.post('http://localhost/test/latest/rightlogin.php',{email,password})
    .then(res => {
        console.log(res);
       //alert(res);
        navigate('/frontpage');
       
    })

    .catch(err =>console.log(err));
    }
    navigate('/frontend');
}

    return(
        <div >
  <div className='Logo'> <img src={logo} alt="Logo" height={150} width={1500} /></div>
  <div className='content'></div>
  <div className='bg-white d-flex justify-content-center align-items-center bg-primary '>
            <div className='bg-white p-3 rounded w-25'>
                <h2><center><b>LOGIN</b></center></h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' className='form-control rounded-0' name='email' onChange={e=>setEmail(e.target.value)}/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                   
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="Password" placeholder='Enter password' className='form-control rounded-0'name='password'onChange={e=>setPassword(e.target.value)}/>
                   {errors.password&& <span className='text-danger'>{errors.password}</span>}
                </div>
                <button className='btn btn-success w-100 rounded-0'>Login</button>
                <p>Don't have an Account?</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light  rounded-0 text-decoration-none'>Create Account</Link>
            </form>
            </div>
        </div>
        </div>
    )
}
export default Login



/*
import './App.css';
import React, { useState, useEffect  } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import logo from './college logo.png';


    export default function Login() {

        const naviget = useNavigate();

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const [msg, setMsg] = useState("");
     
        useEffect(() => {
            let login = localStorage.getItem("login");
            if(login){
                naviget("/frontpage");
            }
            let loginStatus = localStorage.getItem("loginStatus");
            if(loginStatus){
                setError(loginStatus);
                setTimeout(function(){
                    localStorage.clear();
                    window.location.reload();
                }, 100000);
            }
            setTimeout(function(){
                setMsg("");
            }, 100000);
        }, [msg]);
     
        const handleInputChange = (e, type) => {
            switch(type){
                case "email":
                    setError("");
                    setEmail(e.target.value);
                    if(e.target.value === ""){
                        setError("Email has left blank");
                    }
                    break;
                case "password":
                    setError("");
                    setPassword(e.target.value);
                    if(e.target.value === ""){
                        setError("Password has left blank");
                    }
                    break;
                default:
            }
        }
     
        function loginSubmit(){
            if(email !== "" && password !== ""){
                var url = "http://localhost/test/latest/login.php";
                var headers = {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                };
                var Data = {
                    email: email,
                    password: password
                };
                fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(Data)
                }).then((response) => response.json())
               
                .then((response) => {
                    console.log(response);
                    if(response[0].result === "Invalid email!" || response[0].result === "Invalid password!"){
                        setError(response[0].result);
                    }
                    else{
                        setMsg(response[0].result);
                        setTimeout(function(){
                            localStorage.setItem("login", true);
                            localStorage.setItem('email', email);
                            naviget("/frontend");
                        }, 5000);
                    }
                }).catch((err) => {
                    setError(err);
                    console.log(err);
                })
            }
            else{
                setError("All field are required!")
            }
        }

  return (
<div >
  <div className='Logo'> <img src={logo} alt="Logo" height={150} width={1500} /></div>
  <div className='content'></div>
  <div className='bg-white d-flex justify-content-center align-items-center bg-primary '>
            <div className='bg-white p-3 rounded w-25'>
                <h2><center><b>LOGIN</b></center></h2>
            <form >
            <p>
                            {
                                error !== "" ?
                                <div style={{color: '#842029'}}><b>{error}</b></div> :
                                <div style={{color: '#badbcc'}}><b>{msg}</b></div>
                            }
                        </p>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' className='form-control rounded-0' name='email' value={email} onChange={(e)=>handleInputChange(e,"email")}/>
                    {error.email && <span className='text-danger'>{error.email}</span>}
                   
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="Password" placeholder='Enter password' className='form-control rounded-0'name='password'value={password} onChange={(e)=>handleInputChange(e,"password")}/>
                   {error.password&& <span className='text-danger'>{error.password}</span>}
                </div>
                <button className='btn btn-success w-100 rounded-0'onClick={loginSubmit}>Login</button>
                <p>Don't have an Account?</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light  rounded-0 text-decoration-none'><b>Create Account</b></Link>
            </form>
            </div>
        </div>
        </div>
  )
}

*/