import React from 'react';
import IconLink from './IconLink';

import phoneIcon from '../phone-receiver.png';

import { getPhoneLinkLocation } from '../apiCalls';

function PhoneLink(props) {
    return (
        <IconLink newTab={true} link={getPhoneLinkLocation(props.phoneNumber)} description="Phone" name={props.phoneNumber} icon={phoneIcon} />
    );
}

export default PhoneLink;