import React, { Component } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import {
  FooterContainer,
  FooterSocial,
  SocialLink,
  FooterWrap,
  TextContainer,
  FooterHello,
  Text,
  BtnWrap,
} from './FooterStyle';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Button from '../ButtonStyle';
import Form from './Form/Form';

class Footer extends Component {

  state = {
    showForm: false,
  };

  handleForm = () => {
    this.setState({ showForm: true });
  };

  render() {
    let contact = null;

    if (this.state.showForm) {
      contact = <Form />;
    } else {
      contact = (
        <FooterHello>
          <TextContainer>
            <SectionTitle title='Get in touch' />
            <Text>
              Although Im not currently looking for any new opportunities,
              my inbox is always open. Whether you have a question or just want
              to say hi, Ill try my best to get back to you!
            </Text>
            <BtnWrap>
              <Button onClick={this.handleForm}>Say Hello</Button>
            </BtnWrap>
          </TextContainer>
        </FooterHello>
      );
    }

    return (
      <FooterContainer id='contact'>
        <FooterWrap>
          {contact}
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
          </FooterSocial>
        </FooterWrap>
      </FooterContainer>
    );
  }
};

export default Footer;
