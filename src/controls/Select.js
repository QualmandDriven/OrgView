import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { uuidv4 } from '../helperFunctions';

class Select extends React.Component {
    changeHandler = (e) => {
        this.props.onChange(e.target.value);
    }

    render () {
        let uuid = uuidv4();
        let options = this.props.options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>);
        
        return (
            <FormControl>
                <InputLabel htmlFor={uuid}>{this.props.placeholder}</InputLabel>
                <NativeSelect
                    value={this.props.value}
                    onChange={this.changeHandler}
                    input={<Input id={uuid} />}
                >
                    {options}
                </NativeSelect>
            </FormControl>
        );
    }
}

export default Select;