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
    highScore:0
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>

        <Score
        currentCount={this.state.currentCount}
        highScore={this.state.highScore}
        ></Score>

        {this.state.images.map((i)=>(
          <ImageCard 
          imageSrc={i.image}
          name={i.name}
          
          ></ImageCard>
        ))
        
        }
      </div>
    );
  }
}

export default App;
