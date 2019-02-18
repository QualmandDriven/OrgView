import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

// import Department from "../components/Department";
import DepartmentView from "./DepartmentView";
import PersonView from "./PersonView";
import Specifics from '../components/Specifics';
import ErrorNotFound from './ErrorNotFound';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMembers: true,
      showDetails: true,
      hierarchy: 1,
    };
  }

  hierarchyHandler = (hierarchy) => {
    let hy = +hierarchy;
    this.setState({
      hierarchy: hy
    });
    if (hy === 1) {
      this.setState({
        showDetails: true,
        showMembers: true
      });
    } else {
      this.setState({
        showDetails: false,
        showMembers: false
      });
    }
  }

  showHideDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  showHideMembers = () => {
    this.setState({
      showMembers: !this.state.showMembers
    });
  }

  render() {
    let spec = {
      showMember: this.state.showMembers,
      showDetail: this.state.showDetails,
      hierarchy: this.state.hierarchy
    };
    
    return (
        <div className="grid-container" style={{gridTemplateColumns: "200px auto"}}>
          <Specifics showMembers={this.state.showMembers} showDetails={this.state.showDetails} showMembersHandler={this.showHideMembers} showDetailsHandler={this.showHideDetails} hierarchy={this.state.hierarchy} hierarchyHandler={this.hierarchyHandler} />
          <Switch>
            <Route exact path='/' component={(props) => <DepartmentView route={props} specifics={spec} />} />
            <Route path='/departments/:id' component={(props) => <DepartmentView route={props} specifics={spec} />} />
            <Route path='/users/:id' component={(props) => <PersonView route={props} />} />
            <Route component={() => <ErrorNotFound />} />
          </Switch>
        </div>
    );
  }
}

export default Content;

export const leader = {
  type: "user",
  name: "Hans Dampf",
  jobDescription: "Lead",
  phoneNumber: "+49 89 1234 12345",
  mobileNumber: "+49 123 12345645",
  faxNumber: "+49 89 1234 12350",
  email: "Hans.Dampf@domain.com",
  company: "Company Munich",
  companyCode: "M",
  location: "Munich, Example Stree 23",
  building: "10/2/2",
  imageUrl: "",
  employeeId: 1,
};

export const members = [
  {
    id: 1,
    type: "user",
    name: "Kurzer Name",
    jobDescription: "Nudel 1",
    phoneNumber: "+49 89 1234 12346",
    mobileNumber: "+49 123 12345645",
    faxNumber: "+49 89 1234 12350",
    email: "kurzer.name@domain.com",
    company: "Company Munich",
    companyCode: "M",
    location: "Munich, Example Stree 23",
    building: "10/2/2",
    imageUrl: "",
    employeeId: 2,
  },
  {
    id: 2,
    type: "user",
    name: "Mittel langer Name",
    jobDescription: "Nudel 2",
    phoneNumber: "+49 89 1234 12347",
    mobileNumber: "+49 123 12345645",
    faxNumber: "+49 89 1234 12350",
    email: "Mittel.langername@domain.com",
    company: "Company Munich",
    companyCode: "M",
    location: "Munich, Example Stree 23",
    building: "10/2/2",
    imageUrl: "",
    employeeId: 3
  },
  {
    id: 3,
    type: "user",
    name: "Langer Naaaammmeeeeee",
    jobDescription: "Nudel 3",
    phoneNumber: "+49 89 1234 12348",
    mobileNumber: "+49 123 12345645",
    faxNumber: "+49 89 1234 12350",
    email: "Langer.Naaaammmeeeeee@domain.com",
    company: "Company Munich",
    companyCode: "M",
    location: "Munich, Example Stree 23",
    building: "10/2/2",
    imageUrl: "",
    employeeId: 4
  },
  {
    id: 4,
    type: "user",
    name: "123456789 123456789",
    jobDescription: "123456 456123456 123564987",
    phoneNumber: "+49 89 1234 12349",
    mobileNumber: "+49 123 12345645",
    faxNumber: "+49 89 1234 12350",
    email: "123456789.123456789@123456-456789.com",
    company: "Company Munich",
    companyCode: "M",
    location: "Munich, Example Stree 23",
    building: "10/2/2",
    imageUrl: "",
    employeeId: 5
  }
];

export const dept1SC = {
  type: "department",
  id: 1,
  name: "C",
  description: "Conf",
  costCentre: "12314",
  leader: leader,
  members: members,
  subDepartments: [],
  parentDepartments: [],
};
export const  dept1SV = {
  type: "department",
  id: 2,
  name: "S",
  description: "Sales",
  costCentre: "12313",
  leader: leader,
  members: members,
  subDepartments: [dept1SC, dept1SC],
  parentDepartments: [dept1SC],
};
export const dept1SPC = {
  type: "department",
  id: 3,
  name: "PC",
  description: "Projects & Controlling",
  costCentre: "12312",
  leader: leader,
  members: members,
  subDepartments: [dept1SV, dept1SC],
  parentDepartments: [dept1SV, dept1SC],
};

export const SearchTypes = [
  { value: ["users", "groups"], label: "Persons + Departments" },
  { value: ["users"], label: "Persons" },
  { value: ["groups"], label: "Departments" },
];