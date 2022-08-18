import React from 'react';
import { FaBars, FaCode } from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            {/* <FaCode/> */}
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Techs</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Projects</NavLinks>
            </NavItem>
          <NavBtn>
            <NavBtnLink to="/resume">Resume</NavBtnLink>
          </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;
