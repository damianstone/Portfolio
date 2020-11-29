import React from 'react';
import styled from 'styled-components'
import './Header.css';



const DivImg = styled.div`
width: 100%;
height: auto;
text-align: center;
`

const Img = styled.img`
width: auto;
height: 80px
`

const Technologies = (props) => {
    return ( 
        <DivImg>
            <Img src={props.image}/>
        </DivImg>
    )
}

export default Technologies;