import React from 'react';
import {
    Container,
} from './style';

const SkillCard = ({children}) => {
    return (
        <Container>
            { children }
        </Container>
    )
};

export default SkillCard;