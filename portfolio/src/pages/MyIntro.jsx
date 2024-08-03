import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';
import '../css/MyIntro.css'
import myImage from '../images/project.png';
import resume from '../assets/Aditya-Resme.pdf'
import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';

function myIntro(){
  const navigate = useNavigate();

  const contactMe = () => {
    navigate('/contactMe'); 
  };


  return (
    <>
      <div className='intro-body'>
        <Hamburgerstate />
        <div className='content-main'>
          <div className="content-head">
            <div className="left">
              <h1>So, Who am I? Lorem, ipsum.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat odio sunt ducimus, quod voluptatem, eaque odit quisquam non praesentium id assumenda doloribus voluptate soluta hic facilis quo! Quam laborum necessitatibus rerum suscipit ipsam omnis neque perspiciatis debitis. Eum animi non blanditiis et deleniti odio ex, autem libero, soluta voluptatum amet! Nihil repudiandae, dignissimos deserunt quis repellendus ratione qui maiores laborum quos eligendi doloremque in, recusandae facilis expedita dolorem dicta, hic accusamus aperiam architecto sequi assumenda. Sapiente assumenda saepe mollitia quasi natus, sint recusandae? Enim aliquid, quibusdam quam eius quaerat deserunt magni, corporis aut suscipit a aspernatur reprehenderit omnis officia.</p>

              <div className="lower">
                <div className="skill">
                  <h3>Skill set</h3>
                  <div className="center">
                    {/* <h4>Skill</h4> */}
                    <div className="sub">c++</div>
                    <div className="prog">
                      <div className="a90"></div>
                    </div>
                  </div>
                  <div className="center">
                    {/* <h4>Skill</h4> */}
                    <div className="sub">html</div>
                    <div className="prog">
                      <div className="a80"></div>
                    </div>
                  </div>
                  <div className="center">
                    {/* <h4>Skill</h4> */}
                    <div className="sub">css</div>
                    <div className="prog">
                      <div className="a75"></div>
                    </div>
                  </div>
                  <div className="center">
                    {/* <h4>Skill</h4> */}
                    <div className="sub">js</div>
                    <div className="prog">
                      <div className="a80"></div>
                    </div>
                  </div>
                  <div className="center">
                    {/* <h4>Skill</h4> */}
                    <div className="sub">react.js</div>
                    <div className="prog">
                      <div className="a60"></div>
                    </div>
                  </div>
                  <div className="center">
                    {/* <h4>Skill</h4> */}
                    <div className="sub">sql</div>
                    <div className="prog">
                      <div className="a75"></div>
                    </div>
                  </div>
                </div>
                <div className="sk">
                  <h3>Set Skill</h3>
                </div>
              </div>
            </div>

            <div className="right">
              <img src={myImage} alt='me' className='self' />
            </div>
            
          </div>
        </div>
        <div className="blogsmain">
          <div className="blogs">
            {/* {cards.map((card, index) => (
              <div key={index} className="blog">
                <div className="card-body">
                  <h3 className="card-title"><u>{card.title}</u></h3>
                  <p className="card-text">{card.text}</p>
                  <p className="card-time"><small className="text-body-secondary">{card.time}</small></p>
                </div>
              </div>
            ))} */}
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default myIntro;
