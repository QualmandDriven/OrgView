import React from 'react';

import { Link } from 'react-router-dom';

function DepartmentCrubs(props) {
    let depts = [];
    props.departments.forEach(d => {
        if(depts.length !== 0) {
            depts.push(" > ");
        }
        depts.push(<Link key={d.id} to={"/departments/" + d.id}>{d.name}</Link>);
    });
    
    return (
        <div>
            {depts}
        </div>
    );
}

export default DepartmentCrubs;