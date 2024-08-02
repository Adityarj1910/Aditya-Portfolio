import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';


function Projects(){
    return(
      <>
      <Hamburgerstate />
        <div className='sidebar'>
          Projects
        </div>
      </>
    )
  }
  
  export default Projects;