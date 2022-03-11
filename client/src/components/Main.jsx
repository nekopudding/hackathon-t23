import React, { useState, useEffect } from "react";
import Item from "./Item";
import SearchBar from "./SearchBar";
import axios from "axios";
import Fuse from 'fuse.js'

function Main() {
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

  function deleteNote(note) {
    axios
    .delete('http://localhost:4000/api', { data: note })
    .then(() => console.log('Note Deleted'))
    .catch(err => {
      console.error(err);
    });
    setFullProductList(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== note.id;
      });
    });
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
            onDelete={deleteNote}
          />
        );
      })}
      {isQuerying && queriedList.map((item, index) => {
        return (
          <Item
            key={index}
            id={index}
            item={item}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default Main;
