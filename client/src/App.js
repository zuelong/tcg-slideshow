import React, { Component } from 'react';
import Slideshow from './scenes/Slideshow';
import axios from 'axios'

class App extends Component {

  state = {
    imageList: [],
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/flyers`)
      .then(res => {
        this.setState({ imageList: res.data });
      });
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: 'black'}}>
        <Slideshow 
          imageList={this.state.imageList}
        />
      </div>
    );
  }
}

export default App;
