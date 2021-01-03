import React from 'react';
import { FaGithub, FaGoodreads, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import {
  FooterContainer,
  FooterTitle,
  FooterH1,
  FooterSocial,
  SocialLink,
} from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterTitle>
        <FooterH1>Get in touch</FooterH1>
      </FooterTitle>
      <FooterSocial>
        <SocialLink href='http://www.ultravaper.cl' target='_blank'>
          <FaLinkedin />
        </SocialLink>
        <SocialLink href='https://github.com/damianstone' target='_blank'>
          <FaGithub />
        </SocialLink>
        <SocialLink href='https://www.linkedin.com/in/damian-stone-796a0318b/' target='_blank'>
          <SiGmail />
        </SocialLink>
        <SocialLink href='https://www.linkedin.com/in/damian-stone-796a0318b/' target='_blank'>
          <FaMedium />
        </SocialLink>
        <SocialLink href='https://www.linkedin.com/in/damian-stone-796a0318b/' target='_blank'>
          <FaInstagram />
        </SocialLink>
        <SocialLink href='https://www.goodreads.com/damianstone' target='_blank'>
          <FaGoodreads />
        </SocialLink>
      </FooterSocial>
    </FooterContainer>
  );
};

export default Footer;
