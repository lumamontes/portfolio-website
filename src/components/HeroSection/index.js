import React from 'react';
import {
    Container,
    TextContent
} from './style';

import { useTranslation } from 'react-i18next';
import HeroImage from '../../assets/hero.svg';

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <Container id="hero">
            <img src={HeroImage} alt='Website owner Luma Montes' />
            <TextContent>
                <h3>👏 {t("hero.welcome")} </h3>
                <h1><span>Luma Montes</span> </h1>
                <h3>{t("hero.field")}</h3>
            </TextContent>
        </Container>
    )
};

export default HeroSection;
