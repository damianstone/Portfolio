import React from 'react';
import styled from 'styled-components'
import './Header.css';



const DivImg = styled.div`
width: 100%;
text-align: center;
`

const Img = styled.img`
width: 70%px;
height: 100px
`

const Technologies = (props) => {
    return ( 
        <DivImg>
            <Img src={props.image}/>
        </DivImg>
    )
}

export default Technologies;