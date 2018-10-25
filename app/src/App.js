import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";

const styles = {
  mainSection: {
    paddingBottom: '150px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="card-panel blue-grey lighten-5" style={styles.mainSection}>
        <div className="container">
          <h3>React Memory Game </h3>
          <p className = "flow-text">Click each image ONLY ONCE to win game</p>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
