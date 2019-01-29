import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../axios'
import { Button } from 'react-bootstrap';

export default class Like extends Component {
    constructor(props){
        super(props);
        this.state={
            like:this.props.likestate,
        }
    }


    incLike = () => {
        axios.put(`/api/post/update=${this.props.id}`, {
            like: this.state.like + 1
        })
            .then(response => {
                this.setState({
                    like: this.state.like + 1
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        let currentLike = this.state.like
        return (
            <div>
                <Button bsStyle="primary" onClick={this.incLike} > {currentLike} <FontAwesomeIcon icon="thumbs-up" /></Button>
            </div>
        )
    }
}
