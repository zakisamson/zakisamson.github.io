import React, {useState} from 'react';
import Logo from '../Assets/zaki.png'
import './Navbars.css'

const Navbars = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="Navbars">
      <nav>
        <div className="nav-left"> 
          <img className="logo" src={Logo}></img>
        </div>
        <ul className="nav-right" id={show ? "hidden" : ""}>
          <li><a>HOME</a></li>
          <li><a>ABOUT</a></li>
          <li><a>WORKS</a></li>
          <li><a>CONTACT</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbars;