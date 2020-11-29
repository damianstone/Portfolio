import React from 'react';
import './Diplomas.css';

const DiplomaCard = (props) => {
    return (
    <div className='Diplomas-wrap'>
        <div className='Diploma'>
            <img src={props.image} alt=''/>
            <div>
                <h3>{props.title}</h3>
                <a href={props.href} >Ver credencial</a>
            </div>
        </div>
    </div>
    )
}

export default DiplomaCard;