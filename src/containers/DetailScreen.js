import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../Css/style.css';
import axios from "../axios";
import Weathercomponents from '../components/weathercomponents';
import NavBar from '../components/NavBar';
import ZoomImage from '../components/ZoomImage';
import Sitemap from './Sitemap';
import Loading from '../components/Loading';
import Like from '../components/Like';

class DetailScreen extends Component {
    state = {
        id: "",
        images: [],
        descripstion: [],
        author: [],
        comment: [],
        title: "",
        userauthor: "",
        like: "",
        loading: true,
    }

    componentDidMount() {
        axios.get(`/api/post/id=${window.location.pathname.split("/")[2]}`)
            .then(dt => {
                    this.setState({
                        id: dt.data._id,
                        images: dt.data.listimages,
                        descripstion: dt.data.descripstionnew,
                        author: dt.data.author,
                        comment: dt.data.comment,
                        title: dt.data.title,
                        like: dt.data.like
                    }, () => {});
            })
            .catch(function (error) {
                console.log(error);
        });
        setTimeout(() => {
            this.setState({
            loading: false
          })
        }, 2000);
    }

    render() {
        const displayimages = this.state.images;
        const displaydescripstion = this.state.descripstion;
        const comment = this.state.comment;
        return (
            <div className="body">
                {this.state.loading ? <Loading loadingbool={this.state.loading}></Loading> :
                <div>
                <div className="container">
                <NavBar></NavBar>
                <br></br>
                <br></br>
                <br></br>
                <h1 className="container">{this.state.title}</h1>
                <hr/>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <img className="imguser" src={this.state.author.image}></img>
                            <i>{this.state.author.fullname}</i>
                        </div>
                        <Like likestate={this.state.like} id={this.state.id}></Like>
                    </div>
                <hr/>
                {displaydescripstion.map((article, index) => <div>
                    <h1>{article.descripstiondetail}</h1>
                    <i>{article.descripstiontitle}</i>
                    <ZoomImage className="center" src={displayimages[index].images}/>
                </div>)}
                <hr/>
                <Weathercomponents></Weathercomponents>
                <hr/>
                {/* {comment.map((article, index) => <div>
                    <h1>{article.createdBy}</h1>
                    <i>{article.content}</i>
                    <i>{article.createdAt}</i>
                </div>)} */}
            </div>
            <Sitemap></Sitemap>
            </div>
            }
            </div>
        );
    }
}

export default DetailScreen;