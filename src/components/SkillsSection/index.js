import React from 'react';
import {
    Container,
    SkillsCardContainer,
    LanguageLevelsContainer
} from './style';

import SkillCard from '../SkillCard';

import data from './skills.json';

const SkillsSection = () => {
    return (
        <Container>
            <h2>Skills</h2>
            <SkillsCardContainer>
                {
                    data.skills.map((skill) =>
                        <figure>
                            <SkillCard key={skill.name}>
                                <img src={skill.icon} alt={skill.name} />
                            </SkillCard>
                            <figcaption> {skill.name}</figcaption>
                        </figure>
                    )
                }
            </SkillsCardContainer> 
        </Container>
    )
};

export default SkillsSection;
