import React from 'react';

function CompanyText(props) {
    return (
        <div>{props.company} ({props.companyCode})</div>
    );
}

export default CompanyText;