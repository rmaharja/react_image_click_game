import React from 'react';

const styles = {
  imageStyles: {
    height: "100px",
    width: "100px",
    margin: "20px"
  }
};


const ImageCard = (props) => (
  <div className = "image-card" >
    <img src={props.imageSrc} className="img-fluid" alt={props.name} style={styles.imageStyles}></img>
  </div>
)

export default ImageCard;