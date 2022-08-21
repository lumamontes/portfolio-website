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
        <NavLink href="https://github.com/lumamontes">
          <FaGithub />
        </NavLink>
        <NavLink href='https://www.linkedin.com/in/lumamontes/'>
          <FaLinkedin />
        </NavLink>
        <NavLink href="https://twitter.com/kingsimbi">
          <FaTwitter />
        </NavLink>
        <VerticalLine />
      </NavbarContainer>
    </Nav>
  )
};

export default SocialSideBar;
