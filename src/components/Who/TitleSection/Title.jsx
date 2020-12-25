import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
    return ( 
        <div className={classes.Title}>
            <h2>{props.title}</h2>
        </div>
     );
}
 
export default Title;