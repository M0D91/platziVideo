import React from 'react';
import './timer.css';

const Timer = (props) =>
    // console.log('timeameesta', props)
    (
    <div className='Timer'>
        <p>
            <span>00 / {Math.round((props.duration/60) * 100) / 100 }</span>
        </p>
    </div>
)

export default Timer;