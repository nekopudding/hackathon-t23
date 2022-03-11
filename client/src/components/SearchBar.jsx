import React, { useState } from "react";
import Button from '@mui/material/Button';

function SearchBar(props) {
  const [query, setQuery] = useState("");

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
      <form className="create-note" onSubmit={submitNote}>
        <input
          name="content"
          onChange={handleChange}
          value={query}
          placeholder="Search..."
          rows="1"
        />
        <Button type="submit" variant="contained" sx={{ p: 2 }}>Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
