import React from 'react';

export default function Counter (props) {
    return ( 
        <div className="Counter" onClick={props.clicked}>
            {props.label}
        </div>
     );
}