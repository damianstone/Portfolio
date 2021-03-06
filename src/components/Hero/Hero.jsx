import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Button from '../ButtonStyle';
//import HeroImage from '../../svg/svg-4.svg';
import HeroGif from '../../svg/logo-1.svg';
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroP,
  HeroP2,
  HeroH1,
  HeroH2,
  HeroBtnWrap,
  HeroImgWrap,
  HeroImg,
  ArrowForward,
  ArrowRight,
} from './HeroStyle';
import { initGA, trackingPageGA } from '../../reactGA';

const Hero = (props) => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    initGA();
    trackingPageGA('/hero');
  });

  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroText>
          <Fade left>
            <HeroP>Hey! 👋  My name is</HeroP>
            <HeroH1>Damian Stone</HeroH1>
            <HeroH2>I turn ideas into code</HeroH2>
            <HeroP2>Computer Science student at University of Bristol</HeroP2>
            <HeroBtnWrap>
              <Button
                to='work'
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary={true}
                dark={true}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Toogether App
                {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrap>
          </Fade>
        </HeroText>
        <HeroImgWrap>
          <HeroImg src={HeroGif} alt='' />
        </HeroImgWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
