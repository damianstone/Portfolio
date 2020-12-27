import React from 'react';
import Project from './Project';
import { ProjectOne, ProjectTwo, ProjectThree } from './Data';
import { 
    ProjectContainer,
    SectionTitle,
    ProjectH1,
} from './ProjectStyle';
import { DiJsBadge, DiNodejsSmall, DiReact, DiPython, DiGithubBadge } from "react-icons/di";

const Projects = (props) => {


    return (
        <ProjectContainer id='projects'>
            <SectionTitle>
                <ProjectH1>Things I've Built</ProjectH1>
            </SectionTitle>
            <Project {...ProjectOne} />
            <Project {...ProjectTwo} />
            <Project {...ProjectThree} />
        </ProjectContainer>
    );
};

export default Projects;
