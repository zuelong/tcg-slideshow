import React, { Component } from 'react';
import Flyer from '../components/Flyer';
import { Fade } from 'react-slideshow-image';

class Slideshow extends Component {

  _render_file_names() {
    let images = []
    for (let image of this.props.imageList) {
      images.push(
        <Flyer 
            url={`http://localhost:5000/flyers/${image.image}`}
            image={image}
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
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

export default Slideshow;
