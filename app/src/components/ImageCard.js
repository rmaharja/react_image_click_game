import React from 'react';

const styles = {
  imageStyles: {
    height: "100px",
    width: "100px"
  }
};


const ImageCard = (props) => (
  <div className = "image-card" style={styles.imageStyles}>
    <img src={props.imageSrc} className="img-fluid" alt={props.name}></img>
  </div>
)

export default ImageCard;