import React from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button`
width: 40%;
height: 50px;
transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
background: linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73, 63, 252, 1));
color: rgb(255, 255, 255);
box-shadow: none;
border: 1px solid rgb(34, 92, 255);
text-transform: uppercase;
letter-spacing: 0.1em;
position: relative;
display: inline-flex;
align-items: center;
font-weight: 700;
white-space: nowrap;
font-size: 13px;
justify-content: center;
text-decoration: none;
cursor: pointer;
appearance: none;
padding: 11px 22px;
line-height: 36px;
border-radius: 4px;
box-sizing: border-box;
align-self: center;
margin: 20px;
`

const Button = (props) => {
    return (
        <ButtonStyled onClick={props.click}>
            {props.text}
        </ButtonStyled>
    )
}

export default Button;