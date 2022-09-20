import React from 'react';
import Upvotes from './upvotes';
import {useParams} from 'react-router-dom';

function Charts() {
    const params = useParams();
    const groupName = params.groupName;
    return (
        <div>
            <Upvotes group={groupName}/>
        </div>
        );
}

export default Charts;