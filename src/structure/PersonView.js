import React from 'react';

import PersonDetail from "../components/PersonDetail";
import DepartmentCrumbs from "../components/DepartmentCrumbs";
import Loading from "./Loading";

import { getPerson, getPersonDepartment } from '../apiCalls';

class PersonView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false,
            person: undefined,
            personDepartment: undefined,
        }

        if(props.route === undefined || props.route.match === undefined || props.route.match.params === undefined || props.route.match.params.id === undefined) {
            this.setState({error: true});
        }
        else { 
            setTimeout(() => this.loadUser(props.route.match.params.id), 1000);
        }
    }

    loadUser = (id) => {
        getPerson(id)
        .then((p) => { this.setState({person: p, loading: false, error: false}); })
        .catch((err) => { this.setState({person: undefined, loading: false, error: true}); });

        getPersonDepartment(id)
        .then((d) => this.setState({personDepartment: d, loading: false, error: false}))
        .catch((err) => this.setState({person: undefined, loading: false, error: true}));
    }

    render() {
        if(this.state.loading === true) {
            return <Loading />;
        }

        if(this.state.error === true) {
            return <span>Error</span>
        }

        if(this.state.person !== undefined) {
            
            let parentDepts = [];
            if(this.state.personDepartment !== undefined) {
                parentDepts = this.state.personDepartment.parentDepartments.slice();
                parentDepts.push(this.state.personDepartment);
            }

            return (
                <div>
                    <DepartmentCrumbs departments={parentDepts} />
                    <PersonDetail person={this.state.person} />
                </div>
            );
        }

        return <Loading />;
    }
}

export default PersonView;