import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background:#393e46;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    @media screen and (max-width: 768px) {
        height: 30vh;
    }
    
`;

export const FooterWrap = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
height: 100%;

`;

export const FooterHello = styled.div`
box-sizing: border-box;
justify-content: center;
width: 70%;
height: 370px;

`;

export const TextContainer = styled.div`
padding: 5px;
display: flex;
justify-content: center;
flex-direction:column;


`;

export const Text = styled.p`
color: white;
font-size: 24px;
width: 70%;
align-self: center;
margin-bottom: 20px;

`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;

`;

export const FooterSocial = styled.div`
    align-self: center;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 768px) {

    }
`;
export const SocialLink = styled.a`
    width: 100%;
    font-size: 100px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    text-align: center;

    &:hover {
        color: black;
    }

    @media screen and (max-width: 768px) {
        font-size: 50px;
        padding: 10px;
    }
`;

/*  verde agua => #0FE47A

morado => linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73, 63, 252, 1))

*/
