import React from 'react';

const styles = {
  imageSize: {
    height: "100px",
    width: "100px",
    margin: "20px",
    boxShadow: "5px 5px 4px 5px #888888",
  }
};

const ImageCard = ({images, handleOnClick}) =>{
  
  const imageList = images.map((i)=>{
    return(
      <div className="container">
      <div className ="row">
        <div className="col s6 m6 l3">
        <img class
          src={i.image}
          id={i.id} 
          key={i.id} 
          style ={styles.imageSize}
          alt={i.name} 
          onClick={handleOnClick}>
        </img>
        </div>
      </div>
      </div>
    )
  })
  return (
    <div id = "imageList">
      {imageList}
    </div>
  )
}//end of const ImageCard

export default ImageCard;
