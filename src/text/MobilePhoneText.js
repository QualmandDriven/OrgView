import React from 'react';
import IconText from './IconText';

import mobileIcon from '../smartphone-call.png';

function MobilePhoneText(props) {
    return (
        <IconText text={props.phoneNumber} description="Mobile" name={props.phoneNumber} icon={mobileIcon} />
    );
}

export default MobilePhoneText;