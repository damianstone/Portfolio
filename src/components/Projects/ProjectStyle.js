import styled from 'styled-components'

export const ProjectContainer = styled.section`
width: 100%;
height: auto;
background-color: #000;
align-items: center;
padding: 100px 80px 150px 80px;
`;

export const SectionTitle = styled.div`
width: 100%;
text-align: center;
`;

export const ProjectH1 = styled.h1`
color: white;
font-size: 35px;
line-height: 1.1;
font-weight: 600;
margin-bottom: 20px;
`;

export const ProjectWrap = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
max-width: 100%;
height: 100%;
padding: 60px 120px;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'black')};

grid-template-areas: ${({ imgStart }) => ( imgStart ? `'info image'` : `'image info'` )};

@media screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-areas: ${({ imgStart }) => ( imgStart ? `'image' 'info'` : `'image image' 'info info'` )};
}

`;

/* right side of the grid  */
export const ProjectImgWrap = styled.div`
    width: 550px;
    height: 300px;
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
align-items: ${({alignItems}) => (alignItems ? 'flex-start' : 'flex-end')};
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
color: ${({nameBlack}) => (nameBlack ? 'black' : 'white')};
font-size: 1.5rem;
font-weight: 600;
margin: 0px 0px 20px;
`;

export const ProjectTextWrap = styled.div`
    box-shadow: 0 10px 30px -15px;
    position: relative;
    z-index: 2;
    padding: 15px;
    border-radius: 5px;
background-color: ${({boxGreen}) => boxGreen ? '#0FE47A' : 'black'};
    width: 95%;
`;

export const ProjectP = styled.p`
    color:${({descriptionLight}) => (descriptionLight ? 'white' : '#0FE47A')};
    font-size: 15px;
`;

export const ProjectTechWrap = styled.div`
width: 70%;
display: flex;
flex-direction: row;
margin-top: 20px;
`;

export const TechIcon = styled.i`
font-size: 2.3rem;
white-space: nowrap;
margin-right: 10%;
color: ${({techIconBlack}) => (techIconBlack ? 'black' : '#0FE47A')};
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
`