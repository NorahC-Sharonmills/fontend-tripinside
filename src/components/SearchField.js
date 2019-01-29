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
    // this.props.searchBool = true;
    // axios.get( `/api/post/search=${value}`)
    //         .then(dt => {
    //             setTimeout(() => {
    //                 this.setState({
    //                     posts: dt.data,
    //                 });
    //             }, 1000)
    //             console.log(dt.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    this.props.history.push(`/search/${value}`);
    
  }

  render() {
    return (
        // <form>
        //     <input onSubmit={this.handleSubmit} onChange={this.handleTextChange} className="form-control" type="text" placeholder="Search"/>
        // </form>
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