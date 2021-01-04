import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { DiJsBadge, DiNodejsSmall, DiReact, DiPython, DiDjango } from 'react-icons/di';
import { FaMailchimp, FaShopify } from 'react-icons/fa';
import {
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

const Project = (props) => {

  const techTrue = [];

  if (props.js) {
    techTrue.push(<DiJsBadge />);
  }
  if (props.mailchimp) {
    techTrue.push(<FaMailchimp />);
  }
  if (props.shopify) {
    techTrue.push(<FaShopify />);
  }
  if (props.react) {
    techTrue.push(<DiReact />);
  }
  if (props.node) {
    techTrue.push(<DiNodejsSmall />);
  }
  if (props.python) {
    techTrue.push(<DiPython />);
  }
  if (props.django) {
    techTrue.push(<DiDjango />);
  }

  const techs = techTrue.map((elem) => {
    return (
      <TechIcon techIconBlack={props.techIconBlack} key={1}>
        {elem}
      </TechIcon>
    );
  });

  return (
    <>
      <ProjectWrap lightBg={props.lightBg} imgStart={props.imgStart}>
        <ProjectImgWrap>
          <ProjectImg src={props.img} alt={props.img} />
        </ProjectImgWrap>
        <ProjectInfoWrap alignItems={props.alignItems}>
          <ProjectOverline>Featured Project</ProjectOverline>
          <ProjectH2 nameBlack={props.nameBlack}>{props.name}</ProjectH2>
          <ProjectTextWrap boxGreen={props.boxGreen}>
            <ProjectP descriptionLight={props.descriptionLight}>{props.description}</ProjectP>
          </ProjectTextWrap>
          <ProjectTechWrap flexStart={props.flexStart}>
            {techs}
          </ProjectTechWrap>
          <ProjectLinks>
            <Link href={props.linkWeb} target='_blank'><FiExternalLink /></Link>
            <Link href={props.linkGit} target='_blank'><FiGithub /></Link>
          </ProjectLinks>
        </ProjectInfoWrap>
      </ProjectWrap>
    </>
  );
};

export default Project;
