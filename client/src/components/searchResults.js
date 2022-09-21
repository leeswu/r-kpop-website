import React from 'react';
import Groups from "../groups.json";
import { List, ListItem, ListItemText, Card } from "@mui/material";
import { Link } from "react-router-dom";

function SearchResults(props) {
    const filteredData = Groups.filter((item) => {
        //if no input the return the original
        if (props.input === '') {
            return item;
        }
        //return the item which contains the user input
        else {
            return item.toLowerCase().includes(props.input)
        }
    });


    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflow: 'auto'}}>
            {filteredData.map((item) => (
                <Card variant="outlined" key={item}>
                    <Link to={`/charts/${item}`}>
                        <ListItem>
                            <ListItemText
                                primaryTypographyProps={{ fontFamily: 'Poppins' }}
                                primary={item}
                            />
                        </ListItem>
                    </Link>
                </Card>
            ))}
        </List>
    )
}

export default SearchResults;
