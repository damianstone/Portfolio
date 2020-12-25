import React from 'react';
import { DiJsBadge, DiNodejsSmall, DiReact, DiPython, DiGithubBadge } from "react-icons/di";
import projectPhoto from '../../images/projects/project-2.png';
import { 
    ProjectContainer,
    SectionTitle,
    ProjectH1,
    ProjectH2,
    ProjectWrap,
    ProjectImgWrap,
    ProjectImg,
    ProjectInfoWrap,
    ProjectOverline,
    ProjectTechWrap,
    ProjectTextWrap,
    ProjectP,
    TechIcon,
    ProjectLinks,
    Link,
} from './ProjectStyle';

const Projects = (props) => {


    return (
        <ProjectContainer id='projects'>
            <SectionTitle>
                <ProjectH1>Things I've Build</ProjectH1>
            </SectionTitle>
            <ProjectWrap>
                <ProjectImgWrap>
                    <ProjectImg src={projectPhoto} alt='python project with deep learning' />
                </ProjectImgWrap>
                <ProjectInfoWrap>
                    <ProjectOverline>Featured Project</ProjectOverline>
                    <ProjectH2>Burguer-App</ProjectH2>
                    <ProjectTextWrap>
                        <ProjectP>A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.</ProjectP>
                    </ProjectTextWrap>
                    <ProjectTechWrap>
                        <TechIcon><DiReact/></TechIcon>
                        <TechIcon><DiJsBadge/></TechIcon>
                        <TechIcon><DiNodejsSmall/></TechIcon>
                        <TechIcon><DiPython/></TechIcon>
                    </ProjectTechWrap>
                    <ProjectLinks>
                        <Link><DiGithubBadge/></Link>
                    </ProjectLinks>
                </ProjectInfoWrap>
            </ProjectWrap>
        </ProjectContainer>
    );
};

export default Projects;
