import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background:#393e46;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 24px 0px 24px;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
    
`;

export const FooterWrap = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
height: 100%;
box-sizing: border-box;

`;

export const FooterHello = styled.div`
box-sizing: border-box;
justify-content: center;
width: 70%;
height: auto;

`;

export const TextContainer = styled.div`
padding: 5px;
display: flex;
justify-content: center;
flex-direction:column;
height: 80vh;


`;

export const Text = styled.p`
color: white;
font-size: 24px;
width: 70%;
align-self: center;
margin-bottom: 20px; 
text-align: center;

@media screen and (max-width: 768px) {
        width: 100%;
        font-size: 19px;
    }

`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;

`;

export const FooterSocial = styled.div`
    align-self: center;
    width: 65%;
    display: flex;
    flex-direction: row;
    height: auto;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {

    }
`;
export const SocialLink = styled.a`
    width: 100%;
    font-size: 80px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    text-align: center;
    transition: 0.3s ease-in-out;

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
