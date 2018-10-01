import React from 'react';
import IconText from './IconText';

import faxIcon from '../fax-top-view.png';

function FaxIconText(props) {
    return (
        <IconText description="Fax" text={props.faxNumber} icon={faxIcon} />
    );
}

export default FaxIconText;