import React from 'react';
import {
    Container,
    SkillsCardContainer,
    LanguageLevelsContainer,
    Wrapper
} from './style';

import SkillCard from '../SkillCard';
import { useTranslation } from 'react-i18next';
import data from './skills.json';

const SkillsSection = () => {
    const { t } = useTranslation();
    return (
        <Container id="skills">
            <h2>Skills</h2>
            <SkillsCardContainer>
                {
                    data.skills.map((skill) =>
                        <SkillCard key={skill.name}>
                            <img src={skill.icon} alt={skill.name} loading="lazy" />
                        </SkillCard>
                    )
                }
            </SkillsCardContainer>
            <LanguageLevelsContainer>
                <Wrapper>
                    <p>{t("skills.pt")}</p>
                    <div>
                        <div></div>
                        {t("skills.level")}
                    </div>
                </Wrapper>
                <Wrapper lg_level_bg="#B14EFF" lg_level_wd="80%">
                    <p>{t("skills.en")}</p>
                    <div>
                        <div></div>
                        {t("skills.level1")}
                    </div>
                </Wrapper>

            </LanguageLevelsContainer>
        </Container>
    )
};

export default SkillsSection;
