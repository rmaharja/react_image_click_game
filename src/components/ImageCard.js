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
      <div className ="row">
        <div className="col s12 m6 l3">
        <img 
          src={i.image}
          id={i.id} 
          key={i.id} 
          style ={styles.imageSize}
          alt={i.name} 
          onClick={handleOnClick}>
        </img>
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


