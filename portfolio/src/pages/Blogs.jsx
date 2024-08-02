import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';


function Blogs(){
    return(
      <>
        <Hamburgerstate />    

        <div className='sidebar'>
          Blogs
        </div>
      </>
    )
  }
  
  export default Blogs;