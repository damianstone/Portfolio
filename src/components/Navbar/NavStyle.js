import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { grey } from '../colors';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#040508' : '#040508')}; 
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 30px;
  max-width: 100%;

  @media screen and (max-width: 768px) {
      padding: 0;
    }
`;

export const NavLogo = styled(LinkR)`
  color: ${grey};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3.0rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

`;

export const ReactLogo = styled.i`
    margin-left: 0.5rem;
    font-size: 3.0rem;

    @media screen and (max-width: 768px) {
      margin-left: 0;
      font-size: 40px;
    }
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    /*display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60% );
    font-size: 50px;
    cursor: pointer;
    color: black;
    padding: 10px; */

    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 50px;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;

  }
`;

export const NavMenu = styled.ul`
  /* display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  justify-content: end; */

    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }

`;

export const NavItem = styled.li`
  height: 80px;

`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.3rem;

  &.active {
    border-bottom: 3px solid #E98A4B;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3DF197;
    /* color: #010606; */
  }
`;
