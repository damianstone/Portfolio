import styled from 'styled-components';
import { black, grey, darkGrey, orange } from '../colors';

export const ProjectContainer = styled.section`
width: 100%;
height: auto;
background-color: ${black};
align-items: center;
padding: 100px 80px 100px 80px;

@media screen and (max-width: 768px) {
      padding: 100px 0;
    }
`;

export const ProjectWrap = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
max-width: 100%;
height: 100%;
padding: 60px 120px;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : black)};

grid-template-areas: ${({ imgStart }) => (imgStart ? '\'info image\'' : '\'image info\'')};

@media screen and (max-width: 768px) {
    grid-template-rows: 30% 70%;
    grid-template-areas: ${({ imgStart }) => (imgStart ? '\'image image\' \'info info\'' : '\'image image\' \'info info\'')};
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 50px  24px 30px 24px;
}

`;

/* right side of the grid  */
export const ProjectImgWrap = styled.div`
    width: 550px;
    height: 300px;
    z-index: 3;
    border-radius: 10px;
    grid-area: image;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 180px;
      text-align:center;
    }
    
`;

export const ProjectImg = styled.img`
    margin: 0 0 10px 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    box-shadow: 0 10px 30px -15px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: auto;
    }
`;

/* left side of the grid  */
export const ProjectInfoWrap = styled.div`
display: flex;
flex-direction: column;
align-items: ${({ alignItems }) => (alignItems ? 'flex-start' : 'flex-end')};
padding: 20px 20px;
grid-area: info;

@media screen and (max-width: 768px) {
      align-items: flex-start;
    }

`;

export const ProjectOverline = styled.p`
margin: 10px 0;
font-weight: 400;
color: ${grey};
font-size: 1.2rem;
`;

export const ProjectH2 = styled.h2`
line-height: 1.1;
color: ${({ nameBlack }) => (nameBlack ? 'black' : 'white')};
font-size: 1.5rem;
font-weight: 600;
margin: 0px 0px 20px;
`;

export const ProjectTextWrap = styled.div`
    box-shadow: 0 10px 30px -15px;
    position: relative;
    z-index: 2;
    padding: 15px;
    border-radius: 18px;
    background-color: ${({ boxGreen }) => (boxGreen ? orange : black)};
    width: 95%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
`;

export const ProjectP = styled.p`
    color:${({ descriptionLight }) => (descriptionLight ? 'white' : '#0FE47A')};
    font-size: 15px;

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
`;

export const ProjectTechWrap = styled.div`
width: 70%;
display: flex;
flex-direction: row;
justify-content: ${({ flexStart }) => (flexStart ? 'flex-start' : 'flex-end')};
margin-top: 20px;

@media screen and (max-width: 768px) {
      justify-content: flex-start;
    }
`;

export const TechIcon = styled.i`
font-size: 2.3rem;
white-space: nowrap;
padding: 10px;
margin-right: 0;
color: ${({ techIconBlack }) => (techIconBlack ? 'black' : grey)};
`;

export const ProjectLinks = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
cursor: pointer;
text-decoration:none;
`;

export const Link = styled.a`
font-size: 1.2rem;
padding: 5px;
white-space: nowrap;
color: white;
cursor: pointer;
text-decoration:none;

&:hover {
    color: #6f42c1;
}
`;

export const ExternalLink = styled.a`
font-size: 1.2rem;
padding: 5px;
white-space: nowrap;
color: white;
cursor: pointer;
text-decoration:none;

&:hover {
    color: black;
}
`;
