import React from 'react';
import Title from './TitleSection/Title';
import WhoInfo from './WhoInfo/WhoInfo';
import damian from '../../images/damian.JPG'

import classes from './Who.module.css';

const Who = (props) => {
    return (
        <div className={classes.Who}>
            <Title title='About me' />
            <WhoInfo />
            <div>
                <Title title='Technologies' />
            </div>
        </div>

    )

}

export default Who;