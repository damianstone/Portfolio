import React from 'react';
import emailjs from 'emailjs-com';
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
} from './FormStyle';

const Form = () => {

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hn5l87j', 'portfolio_react', e.target, 'user_OtLOzBbehPUu6oG8AhJ5d')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <FormDiv>
      <SectionTitle title='Form' />
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
};

export default Form;
