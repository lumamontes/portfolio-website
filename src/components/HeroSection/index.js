import React from 'react';
import {
    Container,
    TextContent
} from './style';

import HeroImage from '../../assets/hero.svg';

const HeroSection = () => {
    return (
        <Container id="hero">
            <img src={HeroImage} alt='Website owner Luma Montes' />
            <TextContent>
                <h3>👏Hey, bem vindo! </h3>
                <h1><span>Luma Montes</span> </h1>
                <h3>Desenvolvedora Junior</h3>
            </TextContent>
        </Container>
    )
};

export default HeroSection;
