import React from 'react';

const styles = {
  imageSize: {
    height: "100px",
    width: "100px",
    margin: "20px"
  }
};

const ImageCard = ({images, handleOnClick}) =>{
  
  const imageList = images.map((i)=>{
    return(
      <div className="image-card">
        <img src={i.image} key={i.id} style ={styles.imageSize} onClick={handleOnClick}></img>
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


