import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Logo from '../Assets/logo.svg'

const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Navbars">
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarToggler onClick={toggle} />
          <NavbarBrand href="/">
            <img className="p" src={Logo}></img>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">WORKS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navbars;