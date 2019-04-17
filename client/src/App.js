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
      <div className="App" style={styles.App}>
        <Slideshow 
          imageList={this.state.imageList}
        />
      </div>
    );
  }
}

const styles = {
  App: {
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
  }
}

export default App;
