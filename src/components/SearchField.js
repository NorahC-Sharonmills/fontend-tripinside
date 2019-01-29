import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup } from "react-bootstrap";
import axios from "../axios";
import { withRouter } from "react-router";

class SearchField extends Component {
  state = {
    posts: []
  }
  handleTextChange = event=> {
    this.props.setSearchString(event.target.value);
  }
  handleSubmit=(event)=>{
    event.preventDefault();
  }

  search(value) {
    this.props.history.push(`/search/${value}`);
    
  }

  render() {
    return (
        <FormGroup>

        <InputGroup>
          <FormControl
            placeholder="Search"
            type="input"
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.search(event.target.value);
              }
            }}
          />
        </InputGroup>
      </FormGroup>
    )
  }
}

export default withRouter(SearchField);