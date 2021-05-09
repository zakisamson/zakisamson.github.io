import React from 'react';
import Logo from '../Assets/zaki.png'
import './Navbars.css'

const Navbars = () => {
  return (
    <div className="Navbars">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="navbar" href="/">
                  <img className="logo" src={Logo} alt="logo"></img>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">WORKS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;