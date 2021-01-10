import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useMeasure from './useMeasure';
import './style.css';

const FillAuto = (props) => {
  const [open, toggle] = useState(true);
  const [bind, { width }] = useMeasure();
  const style = useSpring({ width: open ? width : 0 });

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div {...bind} className='main' onClick={() => toggle(!open)}>
      <animated.div class='fill' style={style} />
      {props.children}
    </div>
  );
};

export default FillAuto;
