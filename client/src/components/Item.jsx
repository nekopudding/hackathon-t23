import React, { useEffect,useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Item(props) {
  if (!props.item ) return <div></div>;
  const {title,description,rating,price,image,tags} = props.item;

  
  function handleClick() {
    props.onDelete(props);
  }
  // useEffect(() => {
  //   for(let i = 0; i < rating/2; i++) {
  //     setStars((stars) => stars + "⭐️");
  //   }
  // },[])
  
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>${price}</p>
      <img src={image} width="200"/>
      <p>{tags.map((tag,index) => <span key={index}>{tag}</span>)}</p>
    </div>
  );
}

export default Item;
