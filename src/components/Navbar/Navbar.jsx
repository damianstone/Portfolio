import React, { useState, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavContainer,
  NavLogo,
  ReactLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavStyle';

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }; // => first transparent and after scroll black

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <Nav scrollNav={scrollNav}>
          <NavContainer>
            <NavLogo to='/' onClick={toggleHome}><ReactLogo className='fab fa-react' /></NavLogo>
            <MobileIcon onClick={toggle}>
              <BiMenuAltRight />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  {' '}
                  About
                  {' '}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='projects'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  {' '}
                  Projects
                  {' '}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='blog'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80} /* -80 because the nav is with -80 of margin */
                >
                  {' '}
                  Blog
                  {' '}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='work'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  {' '}
                  Work
                  {' '}
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
