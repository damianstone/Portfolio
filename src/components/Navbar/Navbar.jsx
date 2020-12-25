import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa';
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
} from './NavStyle.js';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    } // => first transparent and after scroll black 

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                      <NavLogo to="/" onClick={toggleHome}>Damian Stone<ReactLogo className='fab fa-react'></ReactLogo></NavLogo>
                      <MobileIcon onClick={toggle} >
                          <FaBars />
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
                              > About </NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks 
                              to='projects'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                              > Projects </NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks 
                              to='products'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80} /* -80 because the nav is with -80 of margin */
                              > Products </NavLinks>
                          </NavItem>
                          <NavItem>
                              <NavLinks 
                              to='work'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact='true'
                              offset={-80}
                              > Work </NavLinks>
                          </NavItem>
                      </NavMenu>
                </NavContainer>
            </Nav>

        </IconContext.Provider>
        </>
    )
}

export default Navbar