import React from 'react';
import {
    FooterContainer,
    FooterTitle,
    FooterH1,
    FooterSocial,
    SocialLink,
} from './FooterStyle.js'


const Footer = () => {
    return (
      <FooterContainer id='contact'>
          <FooterTitle>
              <FooterH1>Get in touch</FooterH1>
          </FooterTitle>
          <FooterSocial>
              <SocialLink href='http://www.ultravaper.cl' target='_blank'><i className='fab fa-instagram'></i></SocialLink>
              <SocialLink href='https://www.linkedin.com/in/damian-stone-796a0318b/' target='_blank'><i className='fab fa-linkedin'></i></SocialLink>
              <SocialLink href='https://www.goodreads.com/damianstone' target='_blank'><i className='fab fa-goodreads'></i></SocialLink>
              <SocialLink href='https://github.com/damianstone' target='_blank'><i className='fab fa-github'></i></SocialLink>
          </FooterSocial>
      </FooterContainer>
    );
}

export default Footer;