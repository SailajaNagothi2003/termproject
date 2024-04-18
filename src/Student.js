import React, { useState } from 'react';
//import { Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Student() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [id,setId] = useState('');
  const [branch,setBranch] = useState('');
  const [year,setYear] = useState('');

  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if(id.length === 0){
        alert("Id has left Blank!");
      }
    else if(email.length === 0){
      alert("Email has left Blank!");
    }
    else if(branch.length === 0){
        alert("Branch has left Blank!");
      }
     else if(year.length === 0){
        alert("Year has left Blank!");
      }
    else{
      const url = 'http://localhost/test/latest/formsubmit.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('id', id);
      fData.append('email', email);
      fData.append('branch', branch);
      fData.append('year', year);

      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }
 
  return (
    <div className=' gradient-custom'>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
            <div className="card-body p-5">
                <h3 className='headingform'><u>Registration Form</u></h3>
      <form>
        <h3><br></br></h3>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="name">Your Name</label>
                    <input type="text" className="form-control form-control-lg" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="id">Your Id</label>
                    <input type="text"  className="form-control form-control-lg" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="email">Your Email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label">Your Branch</label><br></br>
                  <select name='branch'className='select-form'  id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
                    <option >Choose your Branch</option>
                    <option>CSE</option>
                    <option>ECE</option>
                    <option>CSM</option>
                    <option>IT</option>
                    <option>EEE</option>
                  </select>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label">Present Year</label><br></br>
                  <select name='branch'className='select-form' id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option className='choice'>Choose your year</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button className='btn-block' onClick={handleSubmit}>Register</button>
                 </div>
                  
                  </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   
  );
}
export default Student
