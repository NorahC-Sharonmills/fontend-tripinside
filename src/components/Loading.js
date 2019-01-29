import React, { Component } from 'react'
import { css } from '@emotion/core';
import { ClipLoader, RingLoader} from 'react-spinners';
import '../Css/style.css'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    vertical-align: middle;
    top: 250px;
`;

export class Loading extends Component {
  render() {
    return (
        <div className="body">
            <div className='sweet-loading'>
                <RingLoader
                    css={override}
                    sizeUnit={"px"}
                    size={350}
                    color={'#123abc'}
                    loading={this.props.loadingbool}/>
            </div>
        </div>
    )
  }
}

export default Loading
