import styled from 'styled-components';
import { Link } from 'react-scroll';
import { black } from '../colors';

export const AboutContainer = styled.div`
  color: white;
  background: ${({ lightBg }) => (lightBg ? black : black)};

  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh; //860px
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
      height: auto;
    }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? '\'col2 col1\'' : '\'col1 col2\'')};

  @media screen and (max-width: 768px) {
      grid-template-areas: ${({ imgStart }) => (imgStart ? '\'col1\' \'col2\'' : '\'col1 col1\' \'col2 col2\'')};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
      font-size: 32px;
  }

`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const Alink = styled(Link)`
text-decoration: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    color: #0FE47A;
}
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TechWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const TechIconWrap = styled.div`
width: 70px;
height: 70px;
padding: 10px;
`;

export const Icon = styled.img`
width: 100%;
height: auto;
margin-right: 8px;
white-space: nowrap;

@media screen and (max-width: 768px) {
      margin: 0;
    }
`;

export const ImgWrap = styled.div`
  max-width: 666px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
