import styled from 'styled-components';
import * as colors from '../colors';

export const BlogSection = styled.section`
width: 100%;
height: auto;
background-color: ${colors.black};
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
    text-align: center;
    padding: 0 30px;
    line-height: 1.1;
    font-weight: 600;
    }
`;

export const BlogWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    padding: 0px;
    
  }
`;

export const BlogContainer = styled.div`
  width: 1080px;
  height: 270px;
  display: grid;
  align-items: center;
  border-bottom: 2px solid ${colors.orange};
  grid-template-columns: 20% 20% 60%;
  grid-template-areas: 'column3 column2 column1';

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 40px 8px 20px 8px;
    grid-template-columns: 60% 40%;
    grid-template-rows: 120px auto;
    grid-template-areas: 'column2 column3'
                          'column1 column1';
  }

`;

export const Column1 = styled.div`
    grid-area: column1;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      font-size: 27px;
      margin-bottom: 13px;
      padding: 0 10px;
    }
`;

export const BlogTitle = styled.h2`
color: white;
font-size: 27px;
text-align: left;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
      font-size: 27px;
      margin-bottom: 13px;
    }
`;

export const Preview = styled.a`
  font-size: 19px;
  color: #999;
  width: 95%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
      color: white;
      transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
      font-size: 20px;
      width: 100%;
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

@media screen and (max-width: 768px) {
      padding: 0 10px;
    }

`;

export const Container = styled.div`
margin-bottom: 5px;
margin-top: .8rem;

@media screen and (max-width: 768px) {
      padding: 0;
      margin:0;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;

    }

`;

export const Label = styled.p`
    font-size: 14px;
    color: white;
    margin-bottom: 5px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      width: auto;
      padding: 3px;
    }
`;

export const Info = styled.p`
 font-size: 16px;
 color: ${colors.darkGrey};

 @media screen and (max-width: 768px) {
      font-size: 16px;
      width: auto;
      padding: 3px;
    }
`;

export const Column3 = styled.div`
grid-area: column3;
padding: 50px;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;

@media screen and (max-width: 768px) {
    padding: 0;
    border-radius: 50%;
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    }
`;

export const ImgContainer = styled.div`
  width: 160px;
  height: 160px;
  float: none;


  @media screen and (max-width: 768px) {
      width: 85px;
      height: 85px;
    }
`;

export const Img = styled.img`
 max-width: 100%;
 height: 100%;
 object-fit: cover;
 border-radius: 50%;
`;
