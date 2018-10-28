import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Score from "./components/Score";
import ImageCard from "./components/ImageCard"
import images from "./images.json";



const styles = {
  correct:{
    color: "green"
  },
  wrong:{
    color: "red"
  }
}
class App extends Component {

  state = {
    images:[],
    clickedArray:[],
    currentCount: 0,
    highScore: 0,
    message: "Click image to Start"
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
    console.log("handleifTrue...");
    this.setState({
    currentCount: 0,
    clickedArray:[],
    message: "You lose! Click again to restart!"
    });
  }
  handleIfFalse = (imageId) => {
    console.log("Going into handleifFalse...");
    this.setState({
      currentCount: (this.state.currentCount + 1),
      clickedArray: [...this.state.clickedArray, imageId],
      message:"Nice Job, Click again"
    });
  }
  handleIfWinner = () => {
    this.setState({
      currentCount: 0,
      clickedArray:[],
      message: "Winner! Click image to play again!",
    })
  }

//If clicked, check if image already exists in the clickedArray
//If image does not exists in the clikedArray, go to handleIfFalse
//if image exists go to handIfTrue
  handleOnClick = (event) => {
    let imageId = event.target.id
    console.log("Going into handloeOnClick...");
    console.log('Image id: ' + imageId);

    //if clicked image is not in the array
    if (this.state.clickedArray.indexOf(imageId) === -1 ) {
     //if clickedArray has 12 items:
      if (this.state.clickedArray.length === 11){
        console.log("Winner Winner Chicken Dinner...")
        this.handleIfWinner();
      }
      //if clickedArray does not have 12 items:
      else{
      console.log(`ID# ${imageId} clicked...`);
      this.handleIfFalse(imageId);
      }
    }
    //if clicked image is already in the array;
    else {
        console.log(imageId+ ' Already in Array');
        this.handleIfTrue();
      }
  }//end of handleOnclick
  

  render() {
    return (
      <div>
        <Navbar 
        message={this.state.message}
        ></Navbar>
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