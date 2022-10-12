import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='about' onClick={closeMobileMenu} spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Sobre
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills' onClick={closeMobileMenu} spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects' onClick={closeMobileMenu} spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Projetos
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;