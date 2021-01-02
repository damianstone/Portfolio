import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background:#0FE47A;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
    
`;

export const FooterTitle = styled.div`
    text-align: center;
    margin-bottom: 1%;
`;

export const FooterH1 = styled.h1`
    font-size: 30px;
    color: white;

    @media screen and (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 24px;
      width: 100%;
      max-width: 1100px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 24px;
      color: black;
    }
`;

export const FooterSocial = styled.div`
    align-self: center;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const SocialLink = styled.a`
    width: 100%;
    font-size: 100px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    text-align: center;
`;

/*  verde agua => #0FE47A

morado => linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73, 63, 252, 1))

*/