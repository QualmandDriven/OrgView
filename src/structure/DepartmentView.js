import React from 'react';

import Department from "../components/Department";
import Loading from "./Loading";

import { getDepartment, getDefaultDepartmentId } from '../apiCalls';

class DepartmentView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            department: undefined
        }

        if(props.route === undefined || props.route.match === undefined || props.route.match.params === undefined || props.route.match.params.id === undefined) {
            this.loadDepartment(getDefaultDepartmentId());
        }
        else {
            setTimeout(() => this.loadDepartment(props.route.match.params.id), 1000);
        }
    }

    loadDepartment = (id) => {
        getDepartment(id)
        .then((dept) => { this.setState({department: dept, loading: false, error: false}); })
        .catch((err) => { this.setState({department: undefined, loading: false, error: true}); });
    }

    render() {
        if(this.state.loading === true) {
            return <Loading />;
        }

        if(this.state.error === true) {
            return <span>Error</span>
        }

        if(this.state.department !== undefined) {
            let subDepartments = [];
            if(this.props.specifics.hierarchy !== 1) {
                subDepartments = this.state.department.subDepartments;
            }

            return (
                <Department department={this.state.department} subDepartments={subDepartments} specifics={this.props.specifics} />
            );
        }

        return <Loading />;
    }
}

export default DepartmentView;