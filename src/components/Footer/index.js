import React from 'react';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import {
    Container,
    SideBarContent,
    NavLink
} from './style';


const Footer = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <p>{t("footer")} :)</p>
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
