import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Search = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((parsedJson) => {
        setItems(parsedJson);
        console.log(parsedJson);
      });
  }, []);

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    navigate("/book/" + item.title);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.title}
        </span>
      </>
    );
  };
  return (
    <ReactSearchAutocomplete
      items={items}
      fuseOptions={{ keys: ["title"] }}
      onSelect={handleOnSelect}
      formatResult={formatResult}
      styling={{
        zIndex: "998",
      }}
    />
  );
};

export default Search;
