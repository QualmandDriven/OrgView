import React from 'react';

function IconText(props) {
    return (
        <div><img className="icon" src={props.icon} alt={props.description} /> {props.text}</div>
    );
}

export default IconText;