import React from 'react';
import BarChart from './barchart';
import {useParams} from 'react-router-dom';

function Charts() {
    const params = useParams();
    const groupName = params.groupName;
    return (
        <div>
            <BarChart group={groupName}/>
        </div>
        );
}

export default Charts;