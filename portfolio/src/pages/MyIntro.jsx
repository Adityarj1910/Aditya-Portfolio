import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';

function MyIntro(){
  return(
    <>
    <Hamburgerstate />
      <div className='sidebar'>
        MyIntro
      </div>
    </>
  )
}

export default MyIntro;