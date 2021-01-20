import React from 'react';
import { TitleContainer, ProjectH1 } from './SectionTitleStyle';

const SectionTitle = (props) => {
  return (
    <TitleContainer>
      <ProjectH1>{props.title}</ProjectH1>
    </TitleContainer>
  );
};

export default SectionTitle;
