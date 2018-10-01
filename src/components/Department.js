import React from "react";

import PersonRow from './PersonRow';
import PersonDetail from './PersonDetail';

class Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMembers: props.showMember,
            showDetails: props.showDetail,
            selectedPerson: undefined,
        };
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.showMembers !== this.state.showMembers) {
          this.setState({ showMembers: nextProps.showMember });
        }
        if (nextProps.showDetails !== this.state.showDetails) {
            this.setState({ showDetails: nextProps.showDetail });
          }
      }

    showHideMembers = () => {
        this.setState({showMembers: !this.state.showMembers});
    }

    showHideDetails = () => {
        this.setState({showDetails: !this.state.showDetails});
    }

    selectPerson = (person) => {
        this.setState({selectedPerson: person});
    }

    render() {
        
        let leader = "";
        if(this.props.department.leader !== undefined) {
            leader = <PersonDetail person={this.props.department.leader} small={!this.state.showDetails} />;
        }
        
        let members = "";
        
        if(this.state.showMembers === true && this.props.department.members !== undefined) {
            if(this.state.showDetails === true) {
                members = this.props.department.members.map(m => <PersonDetail key={m.employeeId} person={m} />);
            }
            else {
                
                members = (
                    <table style={{margin: "0px 0px 5px 5px"}}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Phone</th>
                                <th>Mobile</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.department.members.map(m => {
                                if(this.state.selectedPerson !== undefined && this.state.selectedPerson.employeeId === m.employeeId) {
                                    return <td colspan="6"><PersonDetail key={m.employeeId} person={m} small={!this.state.showDetails} /></td>;
                                }
                                return <PersonRow key={m.employeeId} person={m} selectPersonHandler={this.selectPerson} />;
                            })}
                        </tbody>
                    </table>);
                members = this.props.department.members.map(m => {
                    
                        return <PersonDetail key={m.employeeId} person={m} small={!this.state.showDetails} />;
                    
                    });
            }
        }
        
        let subDepartments = "";
        let columnsWidth = "";
        if(this.props.subDepartments) {
            subDepartments = this.props.subDepartments.map(d => <Department key={d.id} department={d} showMembers={this.state.showMembers} showDetails={this.state.showDetails} />)
            columnsWidth = Array(this.props.subDepartments.length).fill("auto").join(" ");
        }

        let cssClass = this.state.showDetails === true ? " large " : " small ";

        return (
            <div>
                <div className={"department-container" + cssClass}>
                    <div>
                        <a href="Main">Main</a> > <a href="Sub">Sub</a> > <a href="SubSub">SubSub</a> > {this.props.department.name}
                    </div>
                    <div className="department-content">
                        <div className="department-header">
                            <div className="department-header-title">
                                <span>
                                    {this.props.department.name} - {this.props.department.description}
                                </span>
                            </div>
                            <div className="department-header-content">
                                <label>Kostenstelle: {this.props.department.costCentre}</label>
                                <input id={"showDetails" + this.props.department.id} type="checkbox" name={"showDetails" + this.props.department.id} onChange={this.showHideDetails} checked={this.state.showDetails} /> <label htmlFor={"showDetails" + this.props.department.id}>Show Details</label>
                                <input id={"showMembers" + this.props.department.id} type="checkbox" name={"showMembers" + this.props.department.id} onChange={this.showHideMembers} checked={this.state.showMembers} /> <label htmlFor={"showMembers" + this.props.department.id}>Show Members</label>
                            </div>
                        </div>
                        {leader}
                        {this.state.showMembers ? <hr /> : ""}
                        <div className="members-container">
                            {members}
                        </div>
                    </div>
                </div>
                <div className="grid-container" style={{gridTemplateColumns: columnsWidth}}>
                    {subDepartments}
                </div>
            </div>
        );
    }
}

export default Department;