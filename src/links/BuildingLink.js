import React from 'react';
import IconLink from './IconLink';

import mailIcon from '../close-envelope.png';

function BuildingLink(props) {
    return (
        <div>Building: <IconLink link={props.building} description="Building" name={props.building} icon={mailIcon} /></div>
    );
}

export default BuildingLink;