import React from 'react';
import {
    Container,
    SkillsCardContainer,
    LanguageLevelsContainer,
    Wrapper
} from './style';

import SkillCard from '../SkillCard';

import data from './skills.json';

const SkillsSection = () => {
    return (
        <Container id="skills">
            <h2>Skills</h2>
            <SkillsCardContainer>
                {
                    data.skills.map((skill) =>
                        <SkillCard key={skill.name}>
                            <img src={skill.icon} alt={skill.name} loading="lazy"/>
                        </SkillCard>
                    )
                }
            </SkillsCardContainer>
            <LanguageLevelsContainer>
                <Wrapper>
                    <p>Português</p>
                    <div>
                        <div></div>
                        Nativa
                    </div>
                </Wrapper>
                <Wrapper lg_level_bg="#B14EFF" lg_level_wd="80%">
                    <p>Inglês</p>
                    <div>
                        <div></div>
                        Fluente
                    </div>
                </Wrapper>

            </LanguageLevelsContainer>
        </Container>
    )
};

export default SkillsSection;
