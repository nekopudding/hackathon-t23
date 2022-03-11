import React, { useState, useEffect } from "react";
import Item from "./Item";
import SearchBar from "./SearchBar";
import Fuse from 'fuse.js'
import HelpDialog from "./HelpDialog";
import MapDialog from "./MapDialog";

function Main(props) {
  const [fullProductList, setFullProductList] = useState([]);
  const [queriedList, setQueriedList] = useState([])
  const [isQuerying,setIsQuerying] = useState(false)

  function searchProduct(title) {
    const fuse = new Fuse(fullProductList, { 
      keys: ["title", "tags"]    
    });    
    let matchingProducts = fuse.search(title);
    matchingProducts = matchingProducts.map((p) => p.item);
    setQueriedList(matchingProducts);
    setIsQuerying(true);
  }
  function clearSearch() {
    setIsQuerying(false);
  }

  function handleClose() {
    props.setHelp(false);
    props.setMap(false);
  }
  const productClick = (item) => {
    // query for the location of the product in the store and send this location to the pathfinding alg.
    //receive back the path to take
  }
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((products) => {
        setFullProductList(products)
        setIsQuerying(false)
      })
  }, []);

  return (
    <div className="main">
      <SearchBar search={searchProduct} clearSearch={clearSearch}/>
      {!isQuerying && fullProductList.map((item, index) => {
        return (
          <Item
            key={index}
            id={index}
            item={item}
            productClick={productClick}
          />
        );
      })}
      {isQuerying && queriedList.map((item, index) => {
        return (
          <Item
            key={index}
            id={index}
            item={item}
            productClick={productClick}
          />
        );
      })}
      <HelpDialog
        open={props.help}
        onClose={handleClose}
      />
      <MapDialog
        open={props.map}
        onClose={handleClose}
      />
    </div>
  );
}

export default Main;
