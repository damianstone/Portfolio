import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Technologies from './Technologies';
import testSlide from '../../images/header1.png';
import { images } from './Images';
import './Header.css';

const StyleHeader = styled.div`
    width: 100%
    height: 100vh;
`;


const Header = (props) => {

    return (
        <StyleHeader>
            <Navbar />
            <div className='Intro'>
                <div className='Intro-text' >
                    <h1>
                        I'm Damian Stone
                    </h1>
                    <p>
                        Lets build something awesome! 
                        The main goal of DVsoft is to keep learning more about programming until we can start creating our own ideas and products. 
                    </p>
                </div>
                <img src={testSlide} alt='' className='Intro-img'/>
            </div>
                <div className='Technologies-container'>
                    <Technologies  image={images[0]}/>
                    <Technologies  image={images[1]} />
                    <Technologies  image={images[2]} />
                    <Technologies  image={images[3]} />
                    <Technologies  image={images[4]} />
                </div>
        </StyleHeader>
    )
}

export default Header;