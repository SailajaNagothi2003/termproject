import React from 'react';
//import { Link} from 'react-router-dom';
import './App.css';

import logo from './college logo.png';
import studid from './student id.png';
import title from './project title.png';
import dom from './domain.png';
import mentor from './mentor.jpg';
import sem from './semseter.png';

const Frontpage = () => {

  return (
<div >
  <div className='Logo'> <img src={logo} alt="Logo" height={150} width={1500} /></div>
  <div className='tables'>
    <table>
   <tr>
    <td><div className='classrow'>
   <img src={studid} alt="studid" height={50} width={50} />
   <a href='http://localhost/MY PROJECT/REGISTRATION FORM/new/search by id.php'>Student Id</a></div></td>
   </tr>
   <tr>
   <td><div className='tablerow'></div></td>
   </tr>
   <tr> 
   <td><div className='classrow' >
    <img src={title} alt="title" height={50} width={50} />
    <a href='http://localhost/MY PROJECT/REGISTRATION FORM/new/search by title.php'>Project Title</a>
    </div></td>
    </tr>
    <tr>
   <td><div className='tablerow'></div></td>
   </tr> 
    <tr>
    <td><div className='classrow' >
    <img src={dom} alt="dom" height={50} width={50} />
    <a href='http://localhost/MY PROJECT/REGISTRATION FORM/new/search by domain.php'>Project Domain</a>
    </div></td> 
    </tr>
    <tr>
   <td><div className='tablerow'></div></td>
   </tr> 
    <tr>
    <td><div className='classrow' >
    <img src={mentor} alt="mentor" height={50} width={50} />
    <a href='http://localhost/MY PROJECT/REGISTRATION FORM/new/search by mentor.php'>Project Mentor</a>
    </div></td> 
    </tr>
    <tr>
   <td><div className='tablerow'></div></td>
   </tr>
    <tr>
    <td><div className='classrow' >
    <img src={sem} alt="sem" height={50} width={50} />
    <a href='http://localhost/MY PROJECT/REGISTRATION FORM/new/search by sem.php'>Semseter</a>
    </div></td> 
    </tr>
    </table>
    </div>
     </div>
   
  
  );
}
export default Frontpage
