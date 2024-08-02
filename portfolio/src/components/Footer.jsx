import React, { useState } from "react";
import "../css/Footer.css";
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import leetcode from '../assets/leetcode.png';
// import leetcode2 from '../assets/leetcode2.png';
import instagram from '../assets/instagram.png';

export default function HamMenu() {

  const email = 'adityarj1910@gmail.com';

  return (
    <>
      <div className="footer">
        <div className="socialbtn">
          <a href="https://github.com/Adityarj1910" target="_blank"><img src={github} /></a>
          <a href={"https://www.linkedin.com/in/aditya-raj-2261a7285/"} target="_blank"><img src={linkedin} /></a>
          <a href={"https://leetcode.com/u/Adityarj1910/"}  target="_blank"><img src={leetcode} /></a>
          <a onClick={() => window.location.href = `mailto:${email}`}><img src={mail} /></a>
          <a href={"https://www.instagram.com/shotby.adiii/"} target="_blank"><img src={instagram} /></a>
        </div>
      </div>

    </>
);
}
