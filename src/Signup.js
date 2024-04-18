import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './college logo.png';
function Signup(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate=useNavigate() 
  
    const handleSubmit = () => {
      if(name.length === 0){
        alert("Name has left Blank!");
      }
      else if(email.length === 0){
        alert("Email has left Blank!");
      }
       else if(password.length === 0){
          alert("Password has left Blank!");
        }
      else{
        const url = 'http://localhost/test/latest/loginform.php';
        let fData = new FormData();
        fData.append('name', name);
        fData.append('email', email);
        fData.append('password', password);
        axios.post(url, fData)
        .then(response=> {
          alert(response.data);
          navigate('/');
        })
        .catch(error=> alert(error));
       
      }
    }

    
    return(
<div >
  <div className='Logo'> <img src={logo} alt="Logo" height={150} width={1500} /></div>
  <div className='content'></div>
  <div className='bg-white d-flex justify-content-center align-items-center bg-primary '>
        <div className='bg-white p-3 rounded w-25'>
        <h2><center><b>SIGNUP</b></center></h2>
        <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
                <label htmlFor="name"><strong>UserName</strong></label>
                <input type="name" placeholder='Enter UserName ' name='name' value={name} 
                 onChange={(e) => setName(e.target.value)} className='form-control rounded-0' />
            </div>

            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email' value={email} 
                 onChange={(e) => setEmail(e.target.value)} className='form-control rounded-0'/>    
            </div>

            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password' value={password} 
                  onChange={(e) => setPassword(e.target.value)}  className='form-control rounded-0'/>     
            </div>

            <button type='submit' className='bg-violet btn btn-success w-100 rounded-0'>SignUp</button>
            <p>Already have an Account?</p>
                <Link to="/" className='btn btn-default border w-100 bg-light  rounded-0 text-decoration-none'><b>Login</b></Link>
        </form>
        </div>
    </div>
    </div>
    )
}
export default Signup