import React, { Component } from 'react';
import TextField from "@mui/material/TextField";
import SearchResults from './searchResults';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    handleInput = (e) => {
        this.setState({input: e.target.value.toLowerCase()})
    }

    render() { 
        return(
            <div>
            <TextField 
            id="outlined-basic"
            label="Search"
            onChange={this.handleInput}
            />
            <SearchResults input={this.state.input}/>
            </div>
        );
    }
}
 
export default SearchBar;