import React from 'react';
import IconLink from './IconLink';

import mobileIcon from '../smartphone-call.png';

import { getPhoneLinkLocation } from '../apiCalls';

function MobilePhoneLink(props) {
    return (
        <IconLink newTab={true} link={getPhoneLinkLocation(props.phoneNumber)} description="Mobile" name={props.phoneNumber} icon={mobileIcon} />
    );
}

export default MobilePhoneLink;