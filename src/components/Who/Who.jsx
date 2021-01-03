import React from 'react';
import Js  from '../../svg/technologies/js-svg.svg';
import react  from '../../svg/technologies/react.svg';
import Python  from '../../svg/technologies/python.svg';
import Django  from '../../svg/technologies/django.svg';
import Shopify  from '../../svg/technologies/shopify.svg';
import { 
    AboutContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    Heading, 
    Subtitle, 
    Alink,
    TechWrap,
    TechIconWrap,
    Icon,
    ImgWrap,
    Column2,
    Img,
} from './WhoStyle';

const Info = (props) => {
    return (
        <>
           <AboutContainer lightBg={props.lightBg} id={props.id} >
               <InfoWrapper>
                   <InfoRow imgStart={props.imgStart}>
                       <Column1>
                       <TextWrapper>
                           <Heading lightText={props.lightText}>{props.headline}</Heading>
                           <Subtitle darkText={props.darkText}>
                               Hello! Im Damian, a student of computer science at University of Bristol. 
                               <br/> <br/>
                               I create this portfolio just for fun. I hope to start writing blogs about books I read and share programming projects
                               <br/> <br/>
                               Although at the moment I am not looking for a project to work on. Me and my team are open to receiving applications on <Alink to='work'>DVsoft</Alink>.
                               <br/> <br/>
                               Here are a few technologies Ive been working with recently:
                            </Subtitle>
                           <TechWrap>
                                <TechIconWrap>
                                    <Icon src={Js}/>
                                </TechIconWrap>
                                <TechIconWrap>
                                    <Icon src={react}/>
                                </TechIconWrap>
                                <TechIconWrap>
                                    <Icon src={Python}/>
                                </TechIconWrap>
                                <TechIconWrap>
                                    <Icon src={Django}/>
                                </TechIconWrap>
                                <TechIconWrap>
                                    <Icon src={Shopify}/>
                                </TechIconWrap>
                           </TechWrap>
                       </TextWrapper>
                       </Column1>
                       <Column2> 
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt}/>
                            </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
           </AboutContainer>
        </>
    )
}

export default Info;