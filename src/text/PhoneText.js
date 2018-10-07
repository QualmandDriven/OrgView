import React from 'react';
import IconText from './IconText';

import phoneIcon from '../phone-receiver.png';

function PhoneText(props) {
    return (
        <IconText text={props.phoneNumber} description="Phone" name={props.phoneNumber} icon={phoneIcon} />
    );
}

export default PhoneText;