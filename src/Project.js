import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Project() {
  const [id,setId] = useState('');
  const [title,setTitle] = useState('');
  const [des,setDes] = useState('');
  const [domain,setDomain] = useState('');
  const [mentor,setMentor] = useState('');
  const [sem,setSem] = useState('');
  const [type,setType] = useState('');
  const [members,setMembers] = useState('');
  const [file,setFile] = useState('');


  const handleSubmit = () => {
    if(id.length === 0){
      alert("Id has left Blank!");
    }
    else if(title.length === 0){
        alert("Project Title has left Blank!");
      }
      else if(des.length === 0){
          alert("Description has left Blank!");
        }
      else if(domain.length === 0){
        alert("Domain has left Blank!");
      }
      else if(mentor.length === 0){
          alert("Mentor has left Blank!");
        }
        else if(sem.length === 0){
          alert("semseter has left Blank!");
        }
        else if(type.length === 0){
            alert("Type of project has left Blank!");
          }
          else if(file.length === 0){
            alert("file upload has left Blank!");
          }
      else{
      const url = 'http://localhost/test/latest/projectsubmit.php';
      let fData = new FormData();
      fData.append('id', id);
      fData.append('title', title);
      fData.append('des', des);
      fData.append('domain', domain);
      fData.append('mentor', mentor);
      fData.append('sem', sem);
      fData.append('type', type);
      fData.append('members', members);
      fData.append('file', file);
     

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
                <h3 className='headingform'><u>Project Details Form</u></h3>
      <form>
        <h3><br></br></h3>
        <div className="form-outline mb-4">
                    <label className="form-label" for="name">Student Id</label>
                    <input type="text" className="form-control form-control-lg" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="name">Project Title</label>
                    <input type="text" className="form-control form-control-lg" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="des">Project Description</label>
                    <textarea  className="form-control form-control-lg" name="des" id="des" value={des} onChange={(e) => setDes(e.target.value)} required/>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="domain">Project Domain</label>
                    <input type="domain" className="form-control form-control-lg" name="domain" id="domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="mentor">Project Mentor</label>
                    <input type="mentor" className="form-control form-control-lg" name="mentor" id="mentor" value={mentor} onChange={(e) => setMentor(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="type">Type of Project</label><br></br>
                  <div className='radios'>
                    <input type="radio"  name="type" id="type" value="individual" onChange={(e) => setType(e.target.value)} />Individual Project<br></br>                    <input type="radio"  name="type" id="type" value="group" onChange={(e) => setType(e.target.value)} />Group Project
                  </div>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="members">Team Members(Group Project)</label>
                    <input type="members" className="form-control form-control-lg" name="members" id="members" value={members} onChange={(e) => setMembers(e.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label">Semseter</label><br></br>
                  <select name='sem'className='select-form' id="sem" value={sem} onChange={(e) => setSem(e.target.value)}>
                    <option className='choice'>select an option</option>
                    <option>1-1</option>
                    <option>1-2</option>
                    <option>2-1</option>
                    <option>2-2</option>
                    <option>3-1</option>
                    <option>3-2</option>
                    <option>4-1</option>
                    <option>4-2</option>
                  </select>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="members">File Upload</label>
                    <input type="file" className="form-control form-control-lg" name="file" id="file" value={file} onChange={(e) => setFile(e.target.value)} />
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
export default Project
