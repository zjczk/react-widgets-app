import React from 'react';

import './Widget.css';

const widget = props => {
    return (
        <div className='widget'>
            <div className='entry'>
                <h1>{props.name}</h1>
                <div>{props.language}</div>
            </div>
            <button 
            className='delete-btn'
            onClick={props.clicked}
            disabled={props.disabled}
            style={{cursor: !props.disabled ? 'pointer' : null,
                    color: !props.disabled ? '#ff005c' : '#f2b4b4'}}></button>
        </div>)
};

export default widget;
