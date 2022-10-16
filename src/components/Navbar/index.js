import React, { useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import Select from 'react-select'

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const options = [
    { value: 'pt', label: '🇧🇷'},
    { value: 'en', label: '🇺🇸' }
  ]
  function handleChange(e){
    i18n.changeLanguage(e.value)
  }
  const { t } = useTranslation();
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
                    {t("nav.about")}
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
                  {t("nav.project")}
                </NavLinks>
              </NavItem>
              <Select
                defaultValue={options[0]} 
                isSearchable={false}
                autoFocus={true} 
                options={options} 
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    neutral0: '#1B1B1B',
                    neutral10: '#1B1B1B',
                  },
                })}
                onChange={(e) => handleChange(e)}
              />
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;