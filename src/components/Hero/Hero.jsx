import React, {useState} from 'react';
import { Button } from '../ButtonStyle';
import HeroImage from '../../svg/svg-2.svg';
import { 
    HeroContainer,
    HeroContent,
    HeroText,
    HeroP,
    HeroH1,
    HeroH2,
    HeroBtnWrap,
    HeroImgWrap,
    HeroImg,
    ArrowForward,
    ArrowRight
} from './HeroStyle';



const Hero = (props) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroContent>
                <HeroText>
                    <HeroP>Hey! 👋  My name is</HeroP>
                    <HeroH1>Damian Stone</HeroH1>
                    <HeroH2>I turn ideas into code</HeroH2>
                    <HeroP>Computer Science student at University of Bristol</HeroP>
                    <HeroBtnWrap>
                        <Button
                        to='work' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary={false}
                        dark={false}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Let's Work {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrap>
                </HeroText>
                <HeroImgWrap>
                    <HeroImg src={HeroImage} alt='' />
                </HeroImgWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;