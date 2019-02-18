import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";

function CheckBox(props) {
    return (
        <FormControlLabel 
            control={
                <Checkbox checked={props.checked} onChange={props.onChange} value={props.label} />
            }
            label={props.label}
        />
    );
}

export default CheckBox;