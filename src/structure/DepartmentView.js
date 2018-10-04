import React from 'react';

import Department from "../components/Department";

import { getDepartment } from '../apiCalls';

class DepartmentView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            department: undefined
        }

        if(props.route.match.params.id !== undefined) {
            this.loadDepartment(props.route.match.params.id);
        }
    }

    loadDepartment = (id) => {
        getDepartment(id)
        .then((dept) => { this.setState({department: dept, loading: false, error: false}); })
        .catch((err) => { this.setState({department: undefined, loading: false, error: true}); });
    }

    render() {
        if(this.state.loading === true) {
            return <span>Loading...</span>;
        }

        if(this.state.error === true) {
            return <span>Error</span>
        }

        if(this.state.department !== undefined) {
            let subDepartments = [];
            if(this.props.specifics.hierarchy.slice(0, 1) !== '1') {
                subDepartments = this.state.department.subDepartments;
            }

            return (
                <Department department={this.state.department} subDepartments={subDepartments} specifics={this.props.specifics} />
            );
        }

        return "Loading...";
    }
}

export default DepartmentView;