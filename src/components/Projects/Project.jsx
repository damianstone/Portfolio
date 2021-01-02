import React from 'react';
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { DiJsBadge, DiNodejsSmall, DiReact, DiPython, DiGithubBadge } from "react-icons/di";
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
                        <DiJsBadge/>
                    </TechIcon>
                    <TechIcon techIconBlack={props.techIconBlack}>
                        <DiPython/>
                    </TechIcon>
                    <TechIcon techIconBlack={props.techIconBlack}>
                        <DiReact/>
                    </TechIcon>
                </ProjectTechWrap>
                <ProjectLinks>
                    <Link href={props.linkHref} target='_blank'><FiExternalLink/></Link>
                    <Link href={props.linkHref} target='_blank'><FiGithub/></Link>
                </ProjectLinks>
            </ProjectInfoWrap>
        </ProjectWrap>
        </>
    )
}

export default Project;
