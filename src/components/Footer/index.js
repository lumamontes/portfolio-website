import React from 'react';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import {
    Container,
    SideBarContent,
    NavLink
} from './style';


const Footer = () => {
    return (
        <Container>
            <p>Made with <span>love</span> by Luma :)</p>
            <p>lumagoesmontes@gmail.com</p>
            <SideBarContent>
                <NavLink href="https://github.com/lumamontes" target='_blank'>
                    <FaGithub />
                </NavLink>
                <NavLink href='https://www.linkedin.com/in/lumamontes/' target='_blank'>
                    <FaLinkedin />
                </NavLink>
                <NavLink href="https://twitter.com/kingsimbi" target='_blank'>
                    <FaTwitter />
                </NavLink>
            </SideBarContent>
        </Container>
    )
};

export default Footer;
