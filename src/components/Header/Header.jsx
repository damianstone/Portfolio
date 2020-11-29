import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Technologies from './Technologies';
import testSlide from '../../images/header1.png';
import { images } from './Images';
import Button from './Button';
import './Header.css';

const HeaderDiv = styled.div`
background: white;
    width: 100%;
`;


const Header = (props) => {

    return (
        <HeaderDiv>
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
                    <Button text='Lets work!' />
                </div>
                <img src={testSlide} alt='' className='Intro-img'/>
            </div>
            <div className='Technologies-container'>
                <Technologies  image={images[0]} />
                <Technologies  image={images[1]} />
                <Technologies  image={images[5]} />
                <Technologies  image={images[2]} />
                <Technologies  image={images[3]} />
                <Technologies  image={images[4]} />
            </div>
        </HeaderDiv>
    )
}

export default Header;