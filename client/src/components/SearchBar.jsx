import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const [expanded,setExpanded] = useState(false);
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);

  function handleChange(event) {
    const { value } = event.target;

    setQuery(value);
  }

  function submitNote(event) {
    event.preventDefault();
    setQuery("");
    if (!props.onAdd(query)) {
      setErrorOnSubmit(true);
      return;
    }
    setErrorOnSubmit(false);

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
      </form>
    </div>
  );
}

export default SearchBar;
