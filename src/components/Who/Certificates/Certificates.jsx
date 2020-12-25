import React from 'react';
import Certification from './Certification/Certification'
import styled from 'styled-components'

const DiplomasDiv = styled.div`
width: 100%;
height: auto;
padding: 3% 2% 7%;
background: #121212;
`

const Certificates = (props) => {
    return (
        <DiplomasDiv>
            <h1 className='title'>Certificates</h1>
            <Certification image={'/'} title='FinTech: Foundations, Payments, and Regulations' href='www.ultravaper' />
            <Certification image={'/'} title='JavaScript Algorithms and Data Structures' href='www.ultravaper' />
            <Certification image={'/'} title='React and Redux' href='www.ultravaper' />
        </DiplomasDiv>
    );
}

export default Certificates;