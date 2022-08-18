import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLink,
  VerticalLine
} from './SocialSideBarElements';

const SocialSideBar = () => {
  return (
      <Nav>
        <NavbarContainer>
          <NavLink to="/">
            <FaGithub/>
          </NavLink>
          <NavLink to="/">
            <FaLinkedin/>
          </NavLink>
          <NavLink to="/">
            <FaTwitter/>
          </NavLink>
        <VerticalLine />
        </NavbarContainer>
      </Nav>
  )
};

export default SocialSideBar;
