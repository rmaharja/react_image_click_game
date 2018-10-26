import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Score from "./components/Score";
import ImageCard from "./components/ImageCard"
import images from "./images.json";

class App extends Component {

  state = {
    images,
    currentCount: 0,
    highScore: 0,
    clicked: false
  }

  handleIfFalse = () => {
    console.log("Nice Job..Chang clicked:false to clicked:true");
    this.setState({
      clicked:true,
      currentCount: (this.state.currentCount + 1)
    });
  }

  handleOnClick = () => {
    console.log("Going into handloeOnClick...");
    (this.state.clicked === false) ? (
      this.handleIfFalse()
      ):
        (alert("You already clicked it..You Lose"));
  }//end of handleOnclick

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <Score
        currentCount={this.state.currentCount}
        highScore={this.state.highScore}
        ></Score>
        <ImageCard images={this.state.images} handleOnClick={this.handleOnClick}></ImageCard>
        
      </div>
    );
  }
}

export default App;