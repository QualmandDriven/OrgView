import React from 'react';
import { withRouter } from 'react-router-dom';

// import Select from 'react-select';
import Select from '../controls/Select';
import AsyncSelect from "react-select/lib/Async";

import { SearchFunction } from "../apiCalls";
import { SearchTypes } from '../structure/Content';
import AutoComplete from '../controls/AutoComplete';

class Search extends React.Component {
    constructor(props) {
        super(props);
        let st = SearchTypes[0].value;
        this.state = {
            searchType: st
        };
    }

    handleInputChange = (e) => {
        if(e.value.type === 'user') {
            this.props.history.push('/users/' + e.value.id);
        }
        else if(e.value.type === 'department') {
            this.props.history.push('/departments/' + e.value.id);
        }   
    }

    search = (v) => {
        return SearchFunction(this.state.searchType, v);
    }

    handleSearch = (e, callback) => {
        setTimeout(() => {
            callback(this.search(e));
        }, 500);
    }

    handleSearchTypeChange = (e) => {
        // this.setState({searchType: e.value});
        this.setState({searchType: e});
    }

    render() {

        return (
            <div className="grid-container search-container" style={{gridTemplateColumns: "250px 300px"}}>
                <Select placeholder="Search for" value={this.state.searchType} onChange={this.handleSearchTypeChange} options={SearchTypes} />
                <AutoComplete />
            </div>
        );
    }
}


// <AsyncSelect
// cacheOptions
// loadOptions={this.handleSearch}
// defaultOptions
// onChange={this.handleInputChange}
// />


// <Select
// className="basic-single"
// classNamePrefix="select"
// defaultValue={SearchTypes[0]}
// options={SearchTypes}
// isLoading={false}
// isClearable={false}
// isRtl={false}
// isSearchable={false}
// onChange={this.handleSearchTypeChange}
// />

export default withRouter(Search);