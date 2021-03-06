import React, { Component } from 'react';

class Flyer extends Component {

  constructor(props) {
    super(props);
    this._formatImage = this._formatImage.bind(this)
  }

  state = { width: 0, height: 0, image: this.props.image};
  
  componentDidMount() {
    this._formatImage()
    window.addEventListener('resize', this._formatImage);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this._formatImage);
  }

  _formatImage() {
    const ratio = window.innerWidth / this.state.image.width
    const height = this.state.image.height * ratio
    const width = this.state.image.width * ratio
    const image = {...this.state.image, height, width}
    this.setState({...this.state, image})
  }

  _calcMargin() {
    return 0.5 * (window.innerHeight - this.state.image.height)
  }
 
  render() {
    const styles = {
      flyer: {
        height: `${this.state.image.height}px`,
        width: `${this.state.image.width}px`,
        marginTop: `${this._calcMargin()}px`,
        overflow: "hidden",
      }
    }

    return (
        <img src={this.props.url} style={styles.flyer} />
    );
  }
}

export default Flyer;
