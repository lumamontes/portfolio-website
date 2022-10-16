import React from 'react';
import {
    Container,
    AboutImagesContent,
    TextContent
} from './style';

import AboutImg from '../../assets/about.svg';
import { useTranslation } from 'react-i18next';

let idade = new Date().getFullYear() - 2002;

const AboutSection = () => {
    const { t } = useTranslation();

    return (
        <Container id="about">
            <TextContent>
                <h2>{t("about.title")}</h2>
                <p>
                    {t("about.content")}
                </p>
                <p>
                    {t("about.content2")}
                </p>
            </TextContent>
            <AboutImagesContent>
                <img src={AboutImg} alt='Drawings of me' loading="lazy" />
                <p><small>art by<a href='https://www.instagram.com/luana.g.m/' target="_blank" rel="noreferrer">@luana.gm</a></small></p>
            </AboutImagesContent>
        </Container>
    )
};

export default AboutSection;
