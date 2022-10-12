import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
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
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
};

export default Navbar;
