import React from 'react';

function IconLink(props) {
    return (
        <a href={props.link}><img className="icon" src={props.icon} alt={props.description} /> {props.name}</a>
    );
}

export default IconLink;