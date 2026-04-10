import React from 'react'

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <span className="designation">Senior Full Stack Engineer <br />10+ years of experience</span>
      </div>
      <img className="me" src="./assets/images/me.jpg" alt="Me" />
      <h2 className="email">workhub.dev1@gmail.com</h2>
      <h2 className="address">Base in Macomb, MI</h2>
      <p className="copyright">&copy; 2026 Oleh. All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="https://linkedin.com/in/olehpiiak"><i className="lab la-linkedin"></i></a>
        </li>
        <li>
          <a href="https://github.com/workhubop"><i className="lab la-github"></i></a>
        </li>
      </ul>
      <a href="#" className="theme-btn">
        <i className="las la-envelope"></i> Hire Me!
      </a>
    </div>
  )
}   
