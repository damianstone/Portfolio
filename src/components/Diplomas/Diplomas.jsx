import React from 'react';
import DiplomaCard from './DiplomaCard'
import './Diplomas.css';
import styled from 'styled-components'
import {logoImage} from './images';

const DiplomasDiv = styled.div`
width: 100%;
height: auto;
padding: 3% 2% 7%;
background: #121212;
`

const Diplomas = (props) => {
    return (
        <DiplomasDiv>
            <h1 className='title'>Certificates</h1>
            <DiplomaCard image={logoImage[0]} title='FinTech: Foundations, Payments, and Regulations' href='www.ultravaper' />
            <DiplomaCard image={logoImage[1]} title='FinTech: Foundations, Payments, and Regulations' href='www.ultravaper' />
            <DiplomaCard image={logoImage[3]} title='FinTech: Foundations, Payments, and Regulations' href='www.ultravaper' />
        </DiplomasDiv>
    );
}

export default Diplomas;