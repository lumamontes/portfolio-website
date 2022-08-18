import React from 'react';
import {
    Container,
    AboutImagesContent,
    TextContent
} from './style';

import AboutImg from '../../assets/about.svg';

const AboutSection = () => {
    return (
        <Container>
            <TextContent>
                <h2>About me</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed purus in massa finibus ultricies. Ut nec enim felis. Sed id tempor tellus. Integer dui lectus, gravida non vestibulum vel, consequat sed quam. Etiam ut mi a velit pulvinar posuere vel vitae ex. Phasellus leo turpis, placerat sed libero sed, dapibus sodales ex</p>
            </TextContent>
            <AboutImagesContent>
                <img src={AboutImg} alt='Image of welcome page' />
                <p>Credits <a href=''>@luana.gm</a></p>
            </AboutImagesContent>
        </Container>
    )
};

export default AboutSection;
