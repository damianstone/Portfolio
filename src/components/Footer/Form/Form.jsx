import React from 'react';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import {
  FormDiv,
  FormContainer,
  InputContainer,
  InputTitle,
  Input,
  BtnWrap,
} from './FormStyle';
import Button from '../../ButtonStyle';

const Form = (props) => {
  return (
    <FormDiv>
      <SectionTitle title='Form' />
      <FormContainer>
        <InputContainer>
          <InputTitle>Name</InputTitle>
          <Input type='text' />
        </InputContainer>
        <InputContainer>
          <InputTitle>Email</InputTitle>
          <Input type='email' />
        </InputContainer>
        <InputContainer>
          <InputTitle>Subject</InputTitle>
          <Input type='text' />
        </InputContainer>
        <InputContainer>
          <InputTitle>Come on with confident!</InputTitle>
          <Input type='text' />
        </InputContainer>
        <BtnWrap>
          <Button>Send</Button>
        </BtnWrap>
      </FormContainer>
    </FormDiv>
  );
};

export default Form;
