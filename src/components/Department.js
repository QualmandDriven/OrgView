import React from "react";

import PersonRow from './PersonRow';
import PersonDetail from './PersonDetail';
import DepartmentCrumbs from './DepartmentCrumbs';

import CheckBox from '../controls/CheckBox';

import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

class Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMembers: props.specifics.showMember,
            showDetails: props.specifics.showDetail,
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
            let spec = {
                showMember: this.state.showMembers,
                showDetail: this.state.showDetails,
                hierarchy: this.state.hierarchy
              };

            subDepartments = this.props.subDepartments.map(d => <Department key={d.id} department={d} specifics={spec} />)
            columnsWidth = Array(this.props.subDepartments.length).fill("auto").join(" ");
        }

        let cssClass = this.state.showDetails === true ? " large " : " small ";

        let parentDepartments = this.props.department.parentDepartments.slice();
        parentDepartments.push(this.props.department);

        let expandIcon = this.state.showMembers ? <ExpandLessIcon /> : <ExpandMoreIcon />

        return (
            <div>
                <div className={"department-container" + cssClass}>
                    <Paper>
                        <div className={"department-container-header"}>
                            <div className={"grid-container"} style={{ gridTemplateColumns: "auto 50px" }}>
                                <div>
                                    <Typography component="p">
                                        <DepartmentCrumbs departments={parentDepartments} />
                                    </Typography>
                                    <Typography variant="h5" component="h3">
                                        {this.props.department.name + " - " + this.props.department.description}
                                    </Typography>
                                    <Typography component="p">
                                        {"Kostenstelle: " + this.props.department.costCentre}
                                    </Typography>
                                </div>
                                <div>
                                    <IconButton
                                        onClick={this.showHideMembers}
                                        aria-expanded={this.state.showMembers}
                                        aria-label="Show Members">
                                        {expandIcon}
                                    </IconButton>
                                </div>
                            </div>
                            <hr />
                        </div>
                        {leader}
                        <Collapse in={this.state.showMembers} timeout="auto" unmountOnExit>
                            <div className="members-container">
                                {members}
                            </div>
                        </Collapse>
                    </Paper>
                    
                </div>
                <div className="grid-container" style={{gridTemplateColumns: columnsWidth}}>
                    {subDepartments}
                </div>
            </div>
        );
    }
}

// <Card>
//                         <CardContent>
//                             <DepartmentCrumbs departments={parentDepartments} />
//                         </CardContent>
//                         <CardHeader 
//                             title={this.props.department.name + " - " + this.props.department.description} 
//                             subheader={"Kostenstelle: " + this.props.department.costCentre}
//                             action={
//                                 <IconButton
//                                     onClick={this.showHideMembers}
//                                     aria-expanded={this.state.showMembers}
//                                     aria-label="Show Members">
//                                     {expandIcon}
//                                 </IconButton>
//                             } />
//                         <CardContent>
                            
                            
//                             <hr />
//                             {leader}
//                             <Collapse in={this.state.showMembers} timeout="auto" unmountOnExit>
//                                 <CardContent>
//                                     <div className="members-container">
//                                         {members}
//                                     </div>
//                                 </CardContent>
//                             </Collapse>
                            
//                         </CardContent>


//                     </Card>

// <div>
// <DepartmentCrumbs departments={parentDepartments} />
// </div>

// <div className="department-content">
// <div className="department-header">
//     <div className="department-header-title">
//         <span>
//             {this.props.department.name} - {this.props.department.description}
//         </span>
//     </div>
//     <div className="department-header-content">
//         <label>Kostenstelle: {this.props.department.costCentre}</label>
//         <FormGroup row>
//             <CheckBox checked={this.state.showDetails} onChange={this.showHideDetails} label="Show Details" />
//             <CheckBox checked={this.state.showMembers} onChange={this.showHideMembers} label="Show Members" />
//         </FormGroup>
//     </div>
// </div>
// {leader}
// {this.state.showMembers ? <hr /> : ""}
// <div className="members-container">
//     {members}
// </div>
// </div>

export default Department;