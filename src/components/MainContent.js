import React, { Component } from 'react'
import { Link} from "react-router-dom";
import '../Css/style.css'
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

export default class MainContent extends Component {
  render() {
    const _Image = this.props.posts.map(img => {
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
      <div className="container">
        <br></br>
        <Masonry className={'my-gallery-class'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false} imagesLoadedOptions={imagesLoadedOptions}>{_Image}</Masonry>
      </div>
    )
  }
}
