import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import axios from "../axios";
import NewHome from './NewHome';
import Sitemap from './Sitemap';
import '../Css/style.css'
import Loading from '../components/Loading';

export default class HomeScreen extends Component {
    state = {
        posts: [],
        searchString: "",
        username: "",
        loading: true,
        images: [],
        image3: [],
        searchbool: false,
        imagesearch: [],
    }
    componentDidMount() {
        axios.get( "/api/post")
            .then(dt => {
                setTimeout(() => {
                    this.setState({
                        posts: dt.data,
                    });
                }, 1000)
            })
            .catch(function (error) {
                console.log(error);
            });
            setTimeout(() => {
                this.setState({
                loading: false
              })
            }, 6000);
    }
    setSearchString = (text)=> {
        axios
        .get("/api/post/search=" + text)
        .then(res => {
          this.setState({posts: res.data})
        })
    }
    render() {

        const displayedPosts = this.state.posts
        console.log(this.state.searchbool);
        return (
            <div className="body">
                { this.state.loading ? <Loading loadingbool={this.state.loading}></Loading> :
                <div>
                    <NavBar id={this.props.id} setLogout={this.props.setLogout} setLogin={this.props.setLogin} logined={this.props.logined} username={this.props.username} setSearchString={this.setSearchString} />
                    <NewHome imgssss={this.state.posts}></NewHome> 
                    <MainContent posts={this.state.posts}/> 
                    <br></br>
                    <hr/>
                    <br></br>
                    <Sitemap></Sitemap> 
                </div>}
            </div>
        )
    }
}
