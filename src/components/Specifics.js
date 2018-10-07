import React from 'react';

import Select from 'react-select';

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

    hierarchyChangedHandler = (e) => {
        this.props.hierarchyHandler(e.value);
    }

    render() {
        return (
            <div style={{padding: "10px"}}>
                <div>
                    <h4>Level</h4>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={this.hierarchies[0]}
                        options={this.hierarchies}
                        isLoading={false}
                        isClearable={false}
                        isRtl={false}
                        isSearchable={false}
                        onChange={this.hierarchyChangedHandler}
                    />
                </div>
                <div>
                    <h4>Display</h4>
                    <div><input id="showDetailsSpecifics" type="checkbox" name="showDetails" onChange={this.detailsChangedHandler} checked={this.props.showDetails} /> <label htmlFor="showDetailsSpecifics">Show Details</label></div>
                    <div><input id="showMembersSpecifics" type="checkbox" name="showMembers" onChange={this.props.showMembersHandler} checked={this.props.showMembers} /> <label htmlFor="showMembersSpecifics">Show Members</label></div>
                </div>
            </div>
        );
    }
}

export default Specifics;