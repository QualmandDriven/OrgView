import React from 'react';

// import Select from 'react-select';
import Select from '../controls/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import CheckBox from '../controls/CheckBox';

class Specifics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // showDetails: true,
            // showMembers: true
        };

        this.hierarchies = [
            { value: 1, label: "1 Hierarchy" },
            { value: 2, label: "2 Hierarchies" },
            { value: 3, label: "3 Hierarchies" },
          ];
    }

    detailsChangedHandler = (e) => {
        // this.setState({showDetails: !this.state.showDetails});
        this.props.showDetailsHandler();
    }

    render() {
        return (
            <div style={{padding: "10px"}}>
                <Card>
                    <CardHeader title="Filtern nach" />
                    <CardContent>
                        <Select placeholder="Level" value={this.props.hierarchy} onChange={this.props.hierarchyHandler} options={this.hierarchies} />
                        <CheckBox checked={this.props.showDetails} onChange={this.detailsChangedHandler} label="Show Details" />
                        <CheckBox checked={this.props.showMembers} onChange={this.props.showMembersHandler} label="Show Members" />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

// <Select
// className="basic-single"
// classNamePrefix="select"
// defaultValue={this.hierarchies[0]}
// options={this.hierarchies}
// isLoading={false}
// isClearable={false}
// isRtl={false}
// isSearchable={false}
// onChange={this.hierarchyChangedHandler}
// />

export default Specifics;