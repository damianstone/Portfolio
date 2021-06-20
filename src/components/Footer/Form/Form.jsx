import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import sentMailSvg from '../../../svg/extra/mailSent.svg';
import Spinner from '../../UI/Spinner/Spinner';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import {
  FormDiv,
  FormContainer,
  FormWrapper,
  InputContainer,
  InputTitle,
  Input,
  BtnWrap,
  InputSubmit,
  TexTarea,
  ImgSentEmail,
} from './FormStyle';

const Form = () => {

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  let form = null;

  const sendEmailHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_hn5l87j', 'portfolio_react', e.target, 'user_OtLOzBbehPUu6oG8AhJ5d')
      .then((result) => {
        setLoading(false);
        setSent(true);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  if (loading) {
    form = (
      <FormDiv>
        <Spinner />
      </FormDiv>
    );
  }

  if (!loading) {
    form = (
      <FormDiv>
        <FormContainer onSubmit={sendEmailHandler}>
          <FormWrapper>
            <InputContainer>
              <InputTitle>Name</InputTitle>
              <Input type='text' name='name' placeholder='Your Name' />
            </InputContainer>
            <InputContainer>
              <InputTitle>Email</InputTitle>
              <Input type='email' name='email' placeholder='hello@world.com' />
            </InputContainer>
            <InputContainer>
              <InputTitle>Subject</InputTitle>
              <Input type='text' name='subject' placeholder='Subject' />
            </InputContainer>
            <InputContainer>
              <InputTitle>Write</InputTitle>
              <TexTarea name='message' placeholder='Message' />
            </InputContainer>
            <BtnWrap>
              <InputSubmit type='submit' value='send' />
            </BtnWrap>
          </FormWrapper>
        </FormContainer>
      </FormDiv>
    );
  }

  if (sent) {
    form = (
      <FormDiv>
        <SectionTitle title='Email sent successfully' />
        <ImgSentEmail src={sentMailSvg} alt='E-mail sent' />
      </FormDiv>
    );
  }

  return form;
};

export default Form;
