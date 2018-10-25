import React from "react";

const styles = {
  mainSection: {
    paddingBottom: '15px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
  }
}
const Score = (props) => (
<div>
    <div className="card-panel blue-grey lighten-5" style={styles.mainSection}>
        <div className="container">
            <p className="flow-text align-center">Click each image ONLY ONCE to win game</p>
            <p className="flow-text">Current Score:    {props.currentCount}          ||    High Score: {props.highScore}</p> 
            <p className="flow-text"> Correct/Incorrect</p>
            <p className="flow-text"></p>
        </div>
    </div>
</div> 

)

export default Score;