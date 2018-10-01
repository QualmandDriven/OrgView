import React from 'react';

import PhoneLink from '../links/PhoneLink';
import MobilePhoneLink from '../links/MobilePhoneLink';
import MailLink from '../links/MailLink';
import BuildingLink from '../links/BuildingLink';

import FaxIconText from "../text/FaxIconText";
import LocationText from '../text/LocationText';
import CompanyText from '../text/CompanyText';
import PersonNameText from '../text/PersonNameText';

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

function PersonDetail(props) {
    // <img src={props.person.imageUrl} alt={props.person.name} />
    // <img src={userIcon} alt={props.person.name} />
    if (props.small === true) {
        return (
            <div className="grid-container person-container" style={{ gridTemplateColumns: "40px auto" }}>
                <div>
                    <img src={userIcon} alt={props.person.name} />
                </div>
                <div>
                    <div>
                        <PersonNameText title={props.person.title} name={props.person.name} />
                    </div>
                    <div className="grid-container" style={{ gridTemplateColumns: "180px auto" }}>
                        <div>
                            <PhoneLink phoneNumber={props.person.phoneNumber} />
                        </div>
                        <div>
                            <MobilePhoneLink phoneNumber={props.person.mobileNumber} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid-container person-container" style={{ gridTemplateColumns: "100px auto" }}>
            <div>
                <img src={userIcon} alt={props.person.name} />
            </div>
            <div>
                <div className="grid-container" style={{ gridTemplateColumns: "280px auto" }}>
                    <div>
                        <PersonNameText title={props.person.title} name={props.person.name} />
                    </div>
                    <div>
                        <CompanyText company={props.person.company} companyCode={props.person.companyCode} />
                    </div>
                </div>
                <div>
                    {props.person.jobDescription}
                </div>
                <div className="grid-container" style={{ gridTemplateColumns: "350px auto" }}>
                    <div>
                        <div><PhoneLink phoneNumber={props.person.phoneNumber} /></div>
                        <div><MailLink email={props.person.email} /></div>
                        <div><LocationText location={props.person.location} /></div>
                    </div>
                    <div>
                        <div><MobilePhoneLink phoneNumber={props.person.mobileNumber} /></div>
                        <div><FaxIconText faxNumber={props.person.faxNumber} /></div>
                        <div><BuildingLink building={props.person.building} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PersonDetail;