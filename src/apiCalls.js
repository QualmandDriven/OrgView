import React from 'react';

import { members, dept1SC, dept1SPC, dept1SV } from './structure/Content';
import userIcon from './user.svg';
import groupIcon from './group.svg';

export function SearchFunction(searchType, searchValue) {
    let mem = [];
    
    if(searchType === undefined)
        return [];

    if(searchType.find(st => st === "users") !== undefined) {
        mem = members.map(m => {
            return {value: m, label: <div><img style={{height: "16px", width: "16px"}} src={userIcon} alt={m.name} /> {m.name}</div>}
        });
    }

    if(searchType.find(st => st === "groups") !== undefined) {
        let depts = [dept1SC, dept1SPC, dept1SV];
        mem = mem.concat(depts.map(d => {
            return {value: d, label: <div><img style={{height: "16px", width: "16px"}} src={groupIcon} alt={d.name} /> {d.name}</div>};
        }));
    }

    return mem.filter(f => f.value.name.toLowerCase().includes(searchValue.toLowerCase()));
}

export async function getDepartment(id) {
    let depts = [dept1SC, dept1SPC, dept1SV];
    return new Promise((resolve, reject) => {
        try {
            resolve(depts.find(d => d.id === +id));    
        } catch (error) {
            reject(error);
        }
    });
}

export async function getUser(id) {
    return members.find(m => m.id === id);
}