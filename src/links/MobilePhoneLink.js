import React from 'react';
import IconLink from './IconLink';

import mobileIcon from '../smartphone-call.png';

function MobilePhoneLink(props) {
    return (
        <IconLink link={props.phoneNumber} description="Mobile" name={props.phoneNumber} icon={mobileIcon} />
    );
}

export default MobilePhoneLink;