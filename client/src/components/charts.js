import React, { useState } from 'react';
import BarChart from './barchart';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
import "./charts.css"

function Charts() {
    const params = useParams();
    const groupName = params.groupName;
    const [state, setState] = useState({ stat: "Comments" });

    function updateStat(newStat) {
        let newState = { stat: newStat };
        setState(newState);
        console.log(state.stat);
    }

    return (
        <div>
            <h1 className='group'>{groupName}</h1> <br />
            {/* <HomeIcon/> */}
            <div className='buttons'>
                <Button variant="outlined"
                    onClick={() => { updateStat("Comments") }}>Comments</Button>
                <Button variant="outlined"
                    onClick={() => { updateStat("Scores") }}>Upvotes</Button>
            </div>
            <BarChart group={groupName} stat={state.stat} />
        </div>
    );
}

export default Charts;
