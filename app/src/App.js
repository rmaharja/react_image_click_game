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

  handleOnClick = () => {
    console.log("Going into handloeOnClick...");
    (this.state.clicked == false) ? (
        this.setState(this.setState({clicked:true}), console.log("Nice Job..Changed clicked:false to clicked:true"))
      ):
        (alert("You already clicked it..You Lose"));

    this.setState({
      currentCount: (this.state.currentCount + 1)
    })
  }

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