import React from 'react';
import {
    Container,
    ProjectCard,
    NavWrapper,
    ProjectContainer,
    ProjectContent,
    NavLink
} from './style';
import { FaGithub, FaExternalLinkSquareAlt} from 'react-icons/fa';

import projectImg1 from '../../assets/querojob.svg'
import projectImg2 from '../../assets/zendesk.svg'
import projectImg3 from '../../assets/locai.svg'


const ProjectsSection = () => {
    return (
        
        <Container>
            <h2>Projects</h2>
            <div>
                <ProjectContainer>
                    <ProjectCard>
                            <img src={projectImg1} />
                        <NavWrapper>
                            <NavLink href="https://github.com/lumamontes/QueroJob" target='_blank'>
                                <FaGithub />
                            </NavLink>
                        </NavWrapper>
                    </ProjectCard>
                    <ProjectContent>
                        <h3>Quero Job</h3>
                        <div>
                            App to help with professional education
                        </div>
                    </ProjectContent>
                </ProjectContainer>

                <ProjectContainer>
                    <ProjectCard bt_color="#FFED4E">
                            <img src={projectImg2} />
                        <NavWrapper>
                            <NavLink href="https://github.com/lumamontes/zendesk" target='_blank'>
                                <FaGithub />
                            </NavLink>
                            <NavLink to="/" target='_blank'>
                                <FaExternalLinkSquareAlt />
                            </NavLink>
                        </NavWrapper>
                    </ProjectCard>
                    <ProjectContent>
                        <h3>ZendeskIndicators</h3>
                        <div>
                            Indicators for support agent metrics that collect data from Zendesk API.
                        </div>
                    </ProjectContent>
                </ProjectContainer>

                <ProjectContainer>
                    <ProjectCard bt_color="#B14EFF">
                            <img src={projectImg3} />
                        <NavWrapper>
                            <NavLink href="https://github.com/lumamontes/locai-frontend" target='_blank'>
                                <FaGithub />
                            </NavLink>
                            <NavLink href="https://www.locai.com.br/" target='_blank'>
                                <FaExternalLinkSquareAlt />
                            </NavLink>
                        </NavWrapper>
                    </ProjectCard>
                    <ProjectContent>
                        <h3>Locaí</h3>
                        <div>
                           A Website for adverting and searching properties to rent.
                        </div>
                    </ProjectContent>
                </ProjectContainer>
            </div>

            
        </Container>
    )
};

export default ProjectsSection;
