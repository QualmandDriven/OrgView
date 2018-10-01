import React, { Component } from 'react';

import Department from "../components/Department";
import Specifics from '../components/Specifics';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMembers: true,
      showDetails: true,
      hierarchy: "1 Hierarchie",
    };
  }

  hierarchyHandler = (hierarchy) => {
    this.setState({
      hierarchy: hierarchy
    });
    if (hierarchy.substring(0, 1) === "1") {
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
    let subDepartments = [];
    if(this.state.hierarchy.slice(0, 1) !== '1') {
      subDepartments = dept1SPC.subDepartments;
    }

    

    return (
        <div className="grid-container" style={{gridTemplateColumns: "200px auto"}}>
          <Specifics showMembers={this.state.showMembers} showDetails={this.state.showDetails} showMembersHandler={this.showHideMembers} showDetailsHandler={this.showHideDetails} hierarchyHandler={this.hierarchyHandler} />
          <Department department={dept1SPC} subDepartments={subDepartments} showMember={this.state.showMembers} showDetail={this.state.showDetails} />
        </div>
    );
  }
}

export default Content;

export const leader = {
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
  id: 1,
  name: "C",
  description: "Conf",
  costCentre: "12314",
  leader: leader,
  members: members,
  subDepartments: []
};
export const  dept1SV = {
  id: 2,
  name: "S",
  description: "Sales",
  costCentre: "12313",
  leader: leader,
  members: members,
  subDepartments: [dept1SC, dept1SC]
};
export const dept1SPC = {
  id: 3,
  name: "PC",
  description: "Projects & Controlling",
  costCentre: "12312",
  leader: leader,
  members: members,
  subDepartments: [dept1SV, dept1SC]
};

export const SearchTypes = [
  { value: "Persons + Departments", label: "Persons + Departments" },
  { value: "Persons", label: "Persons" },
  { value: "Departments", label: "Departments" },
];