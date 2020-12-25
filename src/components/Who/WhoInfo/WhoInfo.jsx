import React from 'react';
import Certificates from '../Certificates/Certificates';
import classes from './WhoInfo.module.css';

const WhoInfo = (props) => {
    return ( 
        <div className={classes.WhoInfo}>
            <p>
               Maze makes it easy to gather user insights by integrating 
               into your existing design and prototyping workflow. Creating 
               user tests is easy as pie. Test InVision, Marvel or Sketch prototypes, 
               and see how your design performs with actionable metrics.
            </p>
        </div>
     );
}
 
export default WhoInfo;