import React, { Component } from 'react'
import axios from "../axios";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../Css/style.css';

export default class NewHome extends Component {
    render() {
        const startlist = this.props.imgssss.length - 3;
        const endlist = this.props.imgssss.imgssss;
        const displayimages = this.props.imgssss.slice(startlist, endlist);
        return (
            <div>
                <hr/>
                <Slider autoplay="10">
                    {displayimages.map((article, index) => <div key={index}>
                        <div className="image">
                            <img className="background" src={displayimages[index].listimages[0].images} alt="" />      
                            <h2 className="center"><span>{article.title}</span></h2>
                        </div>
                        <br/>
                    </div>)}
                </Slider>
            </div>
        )
    }
}
