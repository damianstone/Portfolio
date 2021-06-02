import styled from 'styled-components';
import * as colors from '../../colors';

export const FormDiv = styled.div`
width: 100%;
height: auto;
background-color: ${colors.black};
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
margin-bottom: 5%;


@media screen and (max-width: 768px) {
      padding: 100px 0;
    }  
`;

export const FormContainer = styled.form`
width: 35%;
background-color: #ccc;
border-radius: 25px;
padding: 20px 20px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 768px) {
      width: 95%;
}  

`;

export const FormWrapper = styled.div`
width: 100%;

`;

export const InputContainer = styled.div`
box-sizing: border-box;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 8px;
`;

export const InputTitle = styled.h3`
color: black;
font-size: 20px;
margin-bottom: 5px;

`;

export const Input = styled.input`
border-radius: 10px;
height: 45px;
outline: none;
padding: 10px 10px;
color: #2b2b2b;
background-color: #ffffff;
border: none;
border-radius: 35px;
font-size: 14px;
`;

export const TexTarea = styled.textarea`
border-radius: 10px;
height: 80px;
padding: 20px 30px;
outline: none;
color: #2b2b2b;
background-color: #ffffff;
border: none;
border-radius: 35px;
font-size: 14px;
`;

export const InputSubmit = styled.input`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#0FE47A' : '#000000')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : colors.orange)};
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgSentEmail = styled.img`
width: 250px;
height: 300px;
`;

export const Spinner = styled.img`
width: 100px;
height: 100px;

@media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
}  

`;
