import React from 'react';
import IconLink from './IconLink';

import faxIcon from '../fax-top-view.png';

function FaxLink(props) {
    return (
        <IconLink link={props.faxNumber} description="Fax" name={props.faxNumber} icon={faxIcon} />
    );
}

export default FaxLink;