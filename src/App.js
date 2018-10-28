import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Score from "./components/Score";
import ImageCard from "./components/ImageCard"
import images from "./images.json";

class App extends Component {

  state = {
    images:[],
    clickedArray:[],
    currentCount: 0,
    highScore: 0,
  }
  //load immages in after mounting:
  componentDidMount(){
    this.setState({
      images:images
    })
  }

//Move image to clickedArray
//increment score by one

  handleIfTrue = () => {
    console.log("You already selected this dude...You Lose");
    this.setState({
    currentCount: 0,
    clickedArray:[]
    });
  }
  handleIfFalse = (imageId) => {
    console.log("Nice Job..Changed (clicked:false to clicked:true)...");
    this.setState({
      currentCount: (this.state.currentCount + 1),
      clickedArray: [...this.state.clickedArray, imageId]
    });
  }
//If clicked, check if image already exists in the clickedArray
//If image does not exists in the clikedArray, go to handleIfFalse
//if image exists go to handIfTrue

  handleOnClick = (event) => {
    let imageId = event.target.id
    console.log("Going into handloeOnClick...");
    console.log('Image id: ' + imageId);
    if (this.state.clickedArray.indexOf(imageId) === -1 ) {
      console.log(imageId+ ' Pushed in an the array');
      this.handleIfFalse(imageId);
    }
    else{
      console.log(imageId+ ' Already in Array');
      this.handleIfTrue();
    }
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