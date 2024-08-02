import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function MyIntro(){
  return(
    <>
    <Hamburgerstate />
      <div className='sidebar'>
        MyIntro
      </div>
      <Footer />
    </>
  )
}

export default MyIntro;