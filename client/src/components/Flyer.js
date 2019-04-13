import React, { Component } from 'react';

class Flyer extends Component {
  render() {
    return (
        <img src={this.props.imageURL} style={styles.flyer} />
    );
  }
}

const styles = {
  flyer: {
    height: '100vh',
    width: '50vw',
    marginLeft: '25vw'
  }
}

export default Flyer;
