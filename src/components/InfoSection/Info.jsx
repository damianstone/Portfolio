import React from 'react'
import { Button } from '../ButtonStyle';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap,
    Column2,
    Img
} from './InfoStyle';

const Info = (props) => {
    return (
        <>
           <InfoContainer lightBg={props.lightBg} id={props.id} >
               <InfoWrapper>
                   <InfoRow imgStart={props.imgStart}>
                       <Column1>
                       <TextWrapper>
                           <TopLine>{props.topLine}</TopLine>
                           <Heading lightText={props.lightText}>{props.headline}</Heading>
                           <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                           <BtnWrap>
                               <Button 
                               to={props.to} 
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact='true'
                               offset={-80}
                               primary={props.primary ? 1 : 0}
                               dark={props.dark ? 1 : 0}
                               dark2={props.dark2 ? 1 : 0}
                               >
                                {props.buttonLabel}
                                </Button>
                           </BtnWrap>
                       </TextWrapper>
                       </Column1>
                       <Column2> 
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
           </InfoContainer>
        </>
    )
}

export default Info;