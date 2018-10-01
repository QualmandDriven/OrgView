import React from 'react';
import IconLink from './IconLink';

import mailIcon from '../close-envelope.png';

function MailLink(props) {
    return (
        <IconLink link={"mailto:" + props.email} description="Mail" name={props.email} icon={mailIcon} />
    );
}

export default MailLink;