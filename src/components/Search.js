import React from 'react';
import { withRouter } from 'react-router-dom';

import Select from 'react-select';
import AsyncSelect from "react-select/lib/Async";

import { SearchFunction } from "../apiCalls";
import { SearchTypes } from '../structure/Content';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: SearchTypes[0].value
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
        this.setState({searchType: e.value});
    }

    render() {
        return (
            <div className="grid-container search-container" style={{gridTemplateColumns: "250px 300px"}}>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={SearchTypes[0]}
                    options={SearchTypes}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={false}
                    onChange={this.handleSearchTypeChange}
                />
                <AsyncSelect
                    cacheOptions
                    loadOptions={this.handleSearch}
                    defaultOptions
                    onChange={this.handleInputChange}
                />
            </div>
        );
    }
}

export default withRouter(Search);