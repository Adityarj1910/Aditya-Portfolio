import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function Projects(){
    return(
      <>
      <Hamburgerstate />
        <div className='sidebar'>
          Projects
        </div>
        <Footer />
      </>
    )
  }
  
  export default Projects;