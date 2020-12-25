import React, {useState} from 'react';
import { Button } from '../ButtonStyle';
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
                    <HeroP>Hey! My name is</HeroP>
                    <HeroH1>Damian Stone</HeroH1>
                    <HeroH2>I turn ideas into code</HeroH2>
                    <HeroP>I'm student of computer science at Uni of Bristol</HeroP>
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
                        >Lets Work  {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrap>
                </HeroText>
                <HeroImgWrap>
                    <HeroImg src='/images/svg-2.svg' alt='' />
                </HeroImgWrap>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;