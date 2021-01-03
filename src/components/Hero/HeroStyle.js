import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #393e46;
  width: 100%;
  height: 100vh;
  z-index: 1;

  @media screen and (max-width: 768px) {
      padding: 50px 0 100px 0;
    }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  align-items: center;
  justify-content: center; 
  width: 100%;
  height: 100%;
  padding: 60px 40px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 60px 40px;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const HeroText = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 50px 50px;

      @media screen and (max-width: 768px) {
      padding: 20px 0px 20px 0px;
    }

`;

export const HeroP = styled.p`
    color: white;
    justify-content: flex-start;
    font-weight: 400;
    width: 60%;
    padding: 5px;
    margin: 10px 0px 10px 4px;

    @media screen and (max-width: 768px) {
      font-size: 14px;
      padding: 0;
    }
`;

export const HeroH1 = styled.h1`
  margin-bottom: 1rem;
  color:#0FE47A;
  font-size: 50px;

  @media screen and (max-width: 768px) {
      font-size: 32px;
    }
`;

export const HeroH2 = styled.h1`
      margin-bottom: 1rem;
      line-height: 0.9;
      font-size: 50px;
      color: white;

      @media screen and (max-width: 768px) {
      font-size: 25px;
    }
`;

export const HeroBtnWrap = styled.div`
 width: 50%;
`;

export const HeroImgWrap = styled.div`
  width: auto;
  height: auto;

  @media screen and (max-width: 768px) {
      padding-top: 2%;
    }
`;

export const HeroImg = styled.img`
    width: 600px;
    height: 600px;
    justify-content: end;

    @media screen and (max-width: 768px) {
      width: 300px;
      height: 300px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;