import React, { useEffect } from 'react';
import Project from './Project';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import {
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
} from './Data';
import {
  ProjectContainer,
} from './ProjectStyle';
import {
  initGA,
  trackingPageGA,
} from '../../reactGA';

const Projects = (props) => {

  useEffect(() => {
    initGA();
    trackingPageGA('/projects');
  }, []);

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
