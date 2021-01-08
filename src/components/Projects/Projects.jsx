import React from 'react';
import Project from './Project';
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour } from './Data';
import {
  ProjectContainer,
  SectionTitle,
  ProjectH1,
} from './ProjectStyle';

const Projects = (props) => {

  return (
    <ProjectContainer id='projects'>
      <SectionTitle>
        <ProjectH1>Projects</ProjectH1>
      </SectionTitle>
      <Project {...ProjectFour} />
      <Project {...ProjectOne} />
      <Project {...ProjectTwo} />
      <Project {...ProjectThree} />
    </ProjectContainer>
  );
};

export default Projects;
