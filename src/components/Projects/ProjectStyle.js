import styled from 'styled-components'

export const ProjectContainer = styled.section`
width: 100%;
height: 100vh;
background: white;
align-items: center;
padding: 50px;
`;

export const SectionTitle = styled.div`
width: 100%;
text-align: center;
`;

export const ProjectH1 = styled.h1`
color: black;
font-size: 35px;
line-height: 1.1;
font-weight: 600;
`;

export const ProjectWrap = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
width: 100%;
height: 100%;
padding: 80px;
grid-template-areas: "info image";
`;

/* right side of the grid  */
export const ProjectImgWrap = styled.div`
    width: 700px;
    height: 400px;
    z-index: 3;
    box-shadow: 0 10px 30px -15px;
    border-radius: 10px;
    grid-area: image;
    
`

export const ProjectImg = styled.img`
    margin: 0 0 10px 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

/* left side of the grid  */
export const ProjectInfoWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 20px 20px;
grid-area: info;

`;

export const ProjectOverline = styled.p`
margin: 10px 0;
font-weight: 400;
color: #0FE47A;
font-size: 1.2rem;
`;

export const ProjectH2 = styled.h2`
line-height: 1.1;
color: black;
font-size: 1.5rem;
font-weight: 600;
margin: 0px 0px 20px;
`;

export const ProjectTextWrap = styled.div`
    box-shadow: 0 10px 30px -15px;
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 5px;
    background-color: #0FE47A;
    width: 95%;
`;

export const ProjectP = styled.p`
    color: white;
    font-size: 18px;
`;

export const ProjectTechWrap = styled.div`
justify-self: center;
width: 70%;
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-top: 20px;
`;

export const TechIcon = styled.i`
font-size: 2.3rem;
white-space: nowrap;
margin-right: 10%;
`;

export const ProjectLinks = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-top: 10px;
`;

export const Link = styled.i`
font-size: 2.0rem;
white-space: nowrap;
color: black;
`