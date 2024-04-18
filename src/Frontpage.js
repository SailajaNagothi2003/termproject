import React from 'react';
import { Link} from 'react-router-dom';
import './App.css';

import logo from './college logo.png';
import stud from './student.png';
import project from './projecticon.png';
import search from './search.png';

const Frontpage = () => {

  return (
<div >
  <div className='Logo'> <img src={logo} alt="Logo" height={150} width={1500} /></div>
  <div className='tables'>
    <table>
   <tr>
    <td><div className='class1'>
   <div><img src={stud} alt="stud" height={150} width={150} /></div>
   <Link to="/student" ><div className='btns'>Student Form</div></Link></div></td>
   <td><div className='tabledata'></div></td>
   <td><div className='class2' >
    <div><img src={project} alt="project" height={150} width={150} /></div>
      <Link to="/project" ><div className='btns'>Project Form</div></Link>
    </div></td> 
    <td><div className='tabledata'></div></td>
    <td><div className='class2' >
    <div><img src={search} alt="search" height={150} width={150} /></div>
      <Link to="/choice" ><div className='btns'>Project Search</div></Link>
    </div></td> 
    </tr>
    </table>
    </div>
     </div>
   
  
  );
}
export default Frontpage
