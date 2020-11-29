import React from 'react';
import styled from 'styled-components';
import header2 from '../../images/header2.png'
import './Who.css';

const Img = styled.img`
width: 45%;
height: 500px;
align-self: center;

`

const Who = () => {
    return (
        <div className='Who'>
            <div className='Who-text'>
                <h1>
                    Who I am?
                </h1>
                <div className='Who-p'>
                    <p>
                    Maze makes it easy to gather user insights by integrating into your existing design and prototyping workflow. Creating user tests is easy as pie. Test InVision, Marvel or Sketch prototypes, and see how your design performs with actionable metrics.
                    </p>
                    <br></br>
                    <p>
                    Using Maze has supercharged our product design process and made it possible to drive faster turnaround times, speeding up product iteration and making for a better, faster user experience.
                    </p>
                </div>
            </div>
            <Img src={header2} />
        </div>

    )

}

export default Who;