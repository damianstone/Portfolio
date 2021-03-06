import React, { useEffect } from 'react';
import Js from '../../svg/technologies/js-svg.svg';
import react from '../../svg/technologies/react-2.svg';
import Python from '../../svg/technologies/python.svg';
import Shopify from '../../svg/technologies/shopify.svg';
import Redux from '../../svg/technologies/redux.svg';
import Firebase from '../../svg/technologies/firebase.svg';
import Figma from '../../svg/technologies/figma.svg';
import Django from '../../svg/technologies/django.svg';
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
import {
  initGA,
  trackingPageGA,
} from '../../reactGA';

const Info = (props) => {

  useEffect(() => {
    initGA();
    trackingPageGA('/about');
  }, []);

  return (
    <>
      <AboutContainer lightBg={props.lightBg} id={props.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={props.lightText}>{props.headline}</Heading>
                <Subtitle darkText={props.darkText}>
                  Hello! Im Damian, from Chile 🇨🇱, currently stuying computer science at the University of Bristol 🇬🇧
                  <br />
                  {' '}
                  <br />
                  I created this portfolio just for fun. I hope to start blogging about the books I read and share programming projects 😎
                  <br />
                  {' '}
                  <br />
                  Although at the moment, I am not looking for a project to work on. My team and I are open to receiving requests on
                  {' '}
                  <Alink to='work'>DVsoft</Alink>
                  <br />
                  {' '}
                  <br />
                  Here is my toolkit: 🚀
                </Subtitle>
                <TechWrap>
                  <TechIconWrap>
                    <Icon src={Js} />
                  </TechIconWrap>
                  <TechIconWrap>
                    <Icon src={react} />
                  </TechIconWrap>
                  <TechIconWrap>
                    <Icon src={Redux} />
                  </TechIconWrap>
                  <TechIconWrap>
                    <Icon src={Firebase} />
                  </TechIconWrap>
                  <TechIconWrap>
                    <Icon src={Figma} />
                  </TechIconWrap>
                  <TechIconWrap>
                    <Icon src={Python} />
                  </TechIconWrap>
                  <TechIconWrap>
                    <Icon src={Django} />
                  </TechIconWrap>
                  <TechIconWrap>
                    <Icon src={Shopify} />
                  </TechIconWrap>
                </TechWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.img} alt={props.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </AboutContainer>
    </>
  );
};

export default Info;
