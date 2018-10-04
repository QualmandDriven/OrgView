import React from 'react';

import BuildingLink from '../links/BuildingLink';
import MailLink from '../links/MailLink';
import MobilePhoneLink from '../links/MobilePhoneLink';
import PhoneLink from '../links/PhoneLink';

import userIcon from '../user.svg';

// name: "Dampf 4",
// jobDescription: "Nudel 4",
// phoneNumber: "+49 89 1234 12349",
// mobileNumber: "+49 123 12345645",
// faxNumber: "+49 89 1234 12350",
// email: "Dampf.4@domain.com",
// company: "Company Munich",
// companyCode: "M",
// location: "Munich, Example Stree 23",
// building: "10/2/2",
// imageUrl: "",
// employeeId: 5

class PersonRow extends React.Component {

    rowClickHandler = () => {
        this.props.selectPersonHandler(this.props.person);
    }

    render() {
        // <td>{this.props.person.imageUrl}</td>
        return (
            <tr onClick={this.rowClickHandler}>
                <td><img src={userIcon} alt="User" /></td>
                <td>{this.props.person.name}</td>
                <td><MailLink email={this.props.person.email} /></td>
                <td><PhoneLink phoneNumber={this.props.person.phoneNumber} /></td>
                <td><MobilePhoneLink phoneNumber={this.props.person.mobileNumber} /></td>
                <td><BuildingLink building={this.props.person.building} /></td>
            </tr>
        );
    }
}
export default PersonRow;