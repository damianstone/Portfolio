import styled from 'styled-components';

export const BlogSection = styled.section`
width: 100%;
height: auto;
background-color: #393e46;
align-items: center;
padding: 100px 80px 100px 80px;

@media screen and (max-width: 768px) {
      padding: 100px 0;
    }
`;

export const SectionTitle = styled.div`
width: 100%;
text-align: center;

@media screen and (max-width: 768px) {
      text-align: left;
    }
`;

export const Title = styled.h1`
color: white;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
margin-bottom: 20px;

@media screen and (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 24px;
      width: 100%;
      max-width: 1100px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 24px;
    }
`;

export const BlogWrap = styled.div`
  border-bottom: 2px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BlogContainer = styled.div`
  width: 1080px;
  height: 270;
  display: grid;
  align-items: center;
  grid-template-columns: 20% 30% 70%;
  grid-template-areas: 'column3 column2 column1';
`;

export const Column1 = styled.div`
    grid-area: column1;

`;

export const Column1Container = styled.div`
padding: 10px;
display: flex;
justify-content: flex-start;
flex-direction: column;
`;

export const BlogTitle = styled.h2`
color: black;
font-size: 27px;
padding: 0 10px 0 0;
text-align: left;
margin-bottom: 10px;
`;

export const Preview = styled.p`
  font-size: 19px;
  color: black;
  width: 90%;
  cursor: pointer;

  &:hover {
      color: white;
  }
`;

export const Column2 = styled.div`
grid-area: column2;

`;

export const Column2Container = styled.div`
padding: 50px;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;

`;

export const Container = styled.div`
margin-bottom: 5px;
margin-top: .8rem;

`;

export const Label = styled.p`
    font-size: 14px;
    color: #999;
`;

export const Info = styled.p`
 font-size: 16px;
 color: black;
`;

export const Column3 = styled.div`
grid-area: column3;

`;

export const Column3Container = styled.div`
padding: 50px;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;

`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  float: none;
`;

export const Img = styled.img`
 max-width: 100%;
 height: 100%;
 border-radius: 50%;
`;
