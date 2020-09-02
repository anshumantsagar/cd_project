import React from 'react';

import ColledgeCard from './collegeCards';
import './college-container.css';

export default function CollegeContainer(props) {
    return (
        <div className="college-container">
            {props.collegeData.map((el, index) => <div className="item" key={index}><ColledgeCard data={el} /></div>)}
        </div>
    )
}