import React, { Component } from 'react'
import posed from 'react-pose'
import '../Css/style.css'

const Frame = posed.div({
    init: {
      applyAtEnd: { display: 'none' },
      opacity: 0
    },
    zoom: {
      applyAtStart: { display: 'block' },
      opacity: 1
    }
  });

const transition = {
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
    init: {
      position: 'static',
      width: 'auto',
      height: 'auto',
      transition,
      flip: true
    },
    zoom: {
      position: 'fixed',
      top: '0px',
      left: '0%',
      right: '0%',
      width: '100%',
      bottom: '10%',
      transition,
      flip: true
    }
  });

class ZoomImage extends Component {
    state = { isZoomed: false };

    zoomIn() {
        window.addEventListener('scroll', this.zoomOut);
        this.setState({ isZoomed: true });
    }
    
    zoomOut = () => {
        window.removeEventListener('scroll', this.zoomOut);
        this.setState({ isZoomed: false });
    };
    
    toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());
  render() {
    const { isZoomed } = this.state;
    const { imageWidth, imageHeight, ...props } = this.props;
    const pose = isZoomed ? 'zoom' : 'init';
    return (
        <div>
            <div className="centerzoom"
            style={{ width: imageWidth, height: imageHeight }}
            onClick={this.toggleZoom}>
                <Frame pose={pose} className="frame" />
                <Image pose={pose} {...props} />
            </div>
        </div>
    )
  }
}

export default ZoomImage
