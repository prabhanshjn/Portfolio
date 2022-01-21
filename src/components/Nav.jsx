import React from 'react';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="www.sa">Resume</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="www.sa">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">Contact</a>
        </li>
       
      </ul>
    </div>
  </nav>
  )
}

