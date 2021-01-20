import styled from 'styled-components';

export const FormDiv = styled.div`
width: 100%;
height: auto;
background-color: #393e46;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
margin-bottom: 5%;
padding: 50px;


@media screen and (max-width: 768px) {
      padding: 100px 0;
    } 
`;

export const FormContainer = styled.div`

width: 50%;
background-color: #ccc;
border-radius: 15px;
padding: 20px 20px;
display: flex;
flex-direction: column;
align-items: center;

`;

export const InputContainer = styled.div`
box-sizing: border-box;
width: 70%;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 8px;
`;

export const InputTitle = styled.h3`
color: black;
font-size: 24px;

`;

export const Input = styled.input`
border-radius: 10px;
height: 30px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
