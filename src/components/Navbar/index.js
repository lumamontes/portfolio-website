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
              <NavLinks to="about" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Projetos</NavLinks>
            </NavItem>
            {/* <NavBtn>
              <NavBtnLink to="/resume">Resume</NavBtnLink>
            </NavBtn> */}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;
