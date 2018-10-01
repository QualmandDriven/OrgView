import React from 'react';

import Select from 'react-select';
import AsyncSelect from "react-select/lib/Async";
import userIcon from '../user.svg';

import { members, SearchTypes } from '../structure/Content';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchType: SearchTypes[0]
        };
    }

    handleInputChange = (e) => {
        console.log(e);
    }

    filter = (v) => {
        let mem = members.map(m => {
            return {value: m.name, label: <div><img style={{height: "16px", width: "16px"}} src={userIcon} /> {m.name}</div>}
        });
        return mem.filter(f => f.value.toLowerCase().includes(v.toLowerCase()));
    }

    handleSearch = (e, callback) => {
        setTimeout(() => {
            callback(this.filter(e));
        }, 500);
    }

    handleSearchTypeChange = (e) => {
        this.setState({searchType: e.value});
    }

    render() {
        const customStyles = {
            control: () => ({
                width: 200
            }
            )
        };
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

export default Search;