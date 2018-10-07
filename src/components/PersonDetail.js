import React from 'react';

import PhoneLink from '../links/PhoneLink';
import MobilePhoneLink from '../links/MobilePhoneLink';
import MailLink from '../links/MailLink';
import BuildingLink from '../links/BuildingLink';

import FaxIconText from "../text/FaxIconText";
import PhoneText from "../text/PhoneText";
import MobilePhoneText from "../text/MobilePhoneText";
import LocationText from '../text/LocationText';
import CompanyText from '../text/CompanyText';
import PersonNameText from '../text/PersonNameText';

import userIcon from '../user.svg';

import { isMobile } from '../apiCalls';

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
    let mobile = isMobile();

    let phone = mobile ? <PhoneText phoneNumber={props.person.phoneNumber} /> : <PhoneLink phoneNumber={props.person.phoneNumber} />
    let mobilePhone = mobile ? <MobilePhoneText phoneNumber={props.person.mobileNumber} /> : <MobilePhoneLink phoneNumber={props.person.mobileNumber} />
    let personName = <PersonNameText title={props.person.title} name={props.person.name} />

    let cssClass = "grid-container person-container";
    
    if(props.selected) {
        cssClass = cssClass + " selected";
    }

    if (props.small === true) {
        return (
            <div className={cssClass} style={{ gridTemplateColumns: "40px auto" }}>
                <div>
                    <img src={userIcon} alt={props.person.name} />
                </div>
                <div>
                    <div>
                        {personName}
                    </div>
                    <div className="split-media-container" style={{ gridTemplateColumns: "180px auto" }}>
                        <div>
                            {phone}
                        </div>
                        <div>
                            {mobilePhone}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cssClass} style={{ gridTemplateColumns: "100px auto" }}>
            <div>
                <img src={userIcon} alt={props.person.name} />
            </div>
            <div>
                <div className="grid-container" style={{ gridTemplateColumns: "280px auto" }}>
                    <div>
                        {personName}
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
                        <div>{phone}</div>
                        <div><MailLink email={props.person.email} /></div>
                        <div><LocationText location={props.person.location} /></div>
                    </div>
                    <div>
                        <div>{mobilePhone}</div>
                        <div><FaxIconText faxNumber={props.person.faxNumber} /></div>
                        <div><BuildingLink building={props.person.building} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PersonDetail;