import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../Css/style.css';
import { Link} from "react-router-dom";

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
                        <Link to={`/post/${article._id}`}> 
                            <div className="image">
                                <img className="background" src={displayimages[index].listimages[0].images} alt="" />      
                                <h2 className="center"><span>{article.title}</span></h2>
                                {/* <div className="center">
                                    <img className="imguserhome" src={article.author.image}></img>
                                    <i>{article.author.fullname}</i>
                                </div> */}
                            </div>
                        </Link>
                        <br/>
                    </div>)}
                </Slider>
            </div>
        )
    }
}
