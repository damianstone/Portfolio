import React from 'react';
import {Spring} from 'react-spring/renderprops'
import './SpringH1.css';

const SpringH1 = (props) => {

    return ( 
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>hello</div>}
        </Spring>
     );
}
 
export default SpringH1;