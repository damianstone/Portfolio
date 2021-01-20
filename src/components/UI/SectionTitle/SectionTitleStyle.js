import styled from 'styled-components';

export const TitleContainer = styled.div`
width: 100%;
text-align: center;

@media screen and (max-width: 768px) {
      text-align: left;
    }
`;

export const ProjectH1 = styled.h1`
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
