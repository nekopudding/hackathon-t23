import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";

function Item(props) {
  if (!props.item ) return <div></div>;
  const {title,rating,price,image,tags} = props.item;

  
  function handleClick() {
    props.productClick(props.item);
  }
  // useEffect(() => {
  //   for(let i = 0; i < rating/2; i++) {
  //     setStars((stars) => stars + "⭐️");
  //   }
  // },[])
  
  return (
    <Box 
      className="note" 
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={handleClick}
    > 
      <h1>{title}</h1>
      <p className="rating">Rating: {rating}</p>
      <p className="price">${price}</p>
      <img src={image} width="200" alt="product"/>
      <Stack direction="row" spacing={1} className="product-tags">
      {tags.map((tag,index) => <Chip key={index} label={tag} variant="outlined" />)}
      </Stack>
    </Box>
  );
}

export default Item;
