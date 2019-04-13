import React, { Component } from 'react';
import Flyer from '../components/Flyer';
import { Fade } from 'react-slideshow-image';

class Slideshow extends Component {

  _render_file_names() {
    let images = []
    for (let url of this.props.imageList) {
      images.push(
        <Flyer 
            imageURL={`http://localhost:5000/flyers/${url}`}
        />
      )
    }

    return images
  }

  render() {
    return (
      <Fade {...fadeProperties}>
        {this._render_file_names()}
      </Fade>
    );
  }
}

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

export default Slideshow;
