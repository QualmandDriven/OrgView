import React from 'react';
import IconLink from './IconLink';

import phoneIcon from '../phone-receiver.png';

function PhoneLink(props) {
    return (
        <IconLink link={props.phoneNumber} description="Phone" name={props.phoneNumber} icon={phoneIcon} />
    );
}

export default PhoneLink;