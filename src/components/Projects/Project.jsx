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
            <TechIcon techIconBlack={props.techIconBlack}>
              {props.js ? <DiJsBadge /> : null}
            </TechIcon>
            <TechIcon techIconBlack={props.techIconBlack}>
              {props.node ? <DiNodejsSmall /> : null}
            </TechIcon>
            <TechIcon techIconBlack={props.techIconBlack}>
              {props.react ? <DiReact /> : null}
            </TechIcon>
            <TechIcon techIconBlack={props.techIconBlack}>
              {props.python ? <DiPython /> : null}
            </TechIcon>
            <TechIcon techIconBlack={props.techIconBlack}>
              {props.django ? <DiDjango /> : null}
            </TechIcon>
            <TechIcon techIconBlack={props.techIconBlack}>
              {props.shopify ? <FaShopify /> : null}
            </TechIcon>
            <TechIcon techIconBlack={props.techIconBlack}>
              {props.mailchimp ? <FaMailchimp /> : null}
            </TechIcon>
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
