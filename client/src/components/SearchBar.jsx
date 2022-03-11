import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const [expanded,setExpanded] = useState(false);

  function handleChange(event) {
    const { value } = event.target;

    setQuery(value);
  }

  function submitNote(event) {
    event.preventDefault();
    if (query === "") { 
      props.clearSearch()
      return;
    }
    props.search(query)
  }

  return (
    <div>
      <form className="create-note"onSubmit={submitNote}>
        <input
          name="content"
          onChange={handleChange}
          value={query}
          placeholder="Search..."
          rows={ expanded ? "3" : "1"}
        />
        <Zoom in={expanded}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
        <Button type="submit" variant="contained">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
