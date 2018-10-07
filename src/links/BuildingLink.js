import React from 'react';
import IconLink from './IconLink';

import mailIcon from '../close-envelope.png';

import { getBuildingLinkLocation } from '../apiCalls';

function BuildingLink(props) {
    return (
        <div>Building: <IconLink link={getBuildingLinkLocation(props.building)} description="Building" name={props.building} icon={mailIcon} /></div>
    );
}

export default BuildingLink;