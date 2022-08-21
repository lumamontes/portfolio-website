import React from 'react';
import {
    Container,
    TextContent
} from './style';

import HeroImage from '../../assets/hero.svg';

const HeroSection = () => {
    return (
        <Container>
            <img src={HeroImage} alt='Image of welcome page' />
            <TextContent>
                <h2>👏Hey, welcome! </h2>
                <h1>I'm <span>Luma Montes</span>  </h1>
                <h3>FullStack Junior Developer</h3>
            </TextContent>
        </Container>
    )
};

export default HeroSection;
