import React from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchElements.css";

const Search = (props) => {
  let iconStyles = {
    color: "gray",
    fontSize: "1.6em",
    marginLeft: "12px",
    marginRight: "0px", 
  };

  return (
    <div id="searchwrapper">
      <div id="search">
        <div id="searchicon">
          <BiSearch style={iconStyles} />
        </div>
        <input
          type="text"
          id="searchtext"
          placeholder="Search"
          onChange={props.updateText}
        />
      </div>
    </div>
  );
};

export default Search;
