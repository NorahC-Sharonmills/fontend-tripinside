import React, { Component } from 'react'
import { Link} from "react-router-dom";
import '../Css/style.css'
import Masonry from 'react-masonry-component';
import axios from "../axios";
import NavBar from './NavBar';
import Sitemap from '../containers/Sitemap';
import Loading from './Loading';

const masonryOptions = {
    transitionDuration: 0
  };
  
  const imagesLoadedOptions = { background: '.my-bg-image-el' }



export class SearchComponent extends Component {
    state = {
        posts: [],
        loading: true
    }

    componentDidMount(){
        axios.get( `/api/post/search=${window.location.pathname.split("/")[2]}`)
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
                }, 2000);
    }

  render() {
    const _Image = this.state.posts.map(img => {
        return (
          <div className="image-element-class col-md-4" key={img._id}>
              <br></br>
              <Link to={`/post/${img._id}`}>
              <div className="titlehome">
                <img className="img-fluid rounded" src={img.listimages[0].images} />
                <h6 className="container titlehometop">{img.title}</h6>
                <hr/>
                <div>
                    <img className="imguserhome" src={img.author.image}></img>
                      <i>{img.author.fullname}</i>
                </div>
                <hr/>
              </div>
              </Link>
              <br></br>
          </div>
        );
      });
    return (
      <div className="body">
        {this.state.loading ? <Loading></Loading> : <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <div className="container">
                <hr/>
                <br></br>
                <Masonry className={'my-gallery-class'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false} imagesLoadedOptions={imagesLoadedOptions}>{_Image}</Masonry>
            </div>
            <div className="marigintop"></div>
            <hr/>
            <Sitemap></Sitemap>
        </div>}
      </div>
    )
  }
}

export default SearchComponent
