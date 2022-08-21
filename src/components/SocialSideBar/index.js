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
        <NavLink href="https://github.com/lumamontes" target='_blank'>
          <FaGithub />
        </NavLink>
        <NavLink href='https://www.linkedin.com/in/lumamontes/' target='_blank'>
          <FaLinkedin />
        </NavLink>
        <NavLink href="https://twitter.com/kingsimbi" target='_blank'>
          <FaTwitter />
        </NavLink>
        <VerticalLine />
      </NavbarContainer>
    </Nav>
  )
};

export default SocialSideBar;
