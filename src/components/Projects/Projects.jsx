import React from 'react';
import Project from './Project';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive } from './Data';
import {
  ProjectContainer,
} from './ProjectStyle';

const Projects = (props) => {

  return (
    <ProjectContainer id='projects'>
      <SectionTitle title='Projects' />
      <Project {...ProjectFour} />
      <Project {...ProjectOne} />
      <Project {...ProjectTwo} />
      <Project {...ProjectThree} />
      <Project {...ProjectFive} />
    </ProjectContainer>
  );
};

export default Projects;
