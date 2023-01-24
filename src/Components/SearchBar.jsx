import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBar.css";
import { useEffect, useRef, useState } from "react";
const SearchBar = ({
  placeholder,
  active,
  onFocus,
  searchTerm,
  onTextChange,
  hover,
  onHover
}) => {
  const inputRef = useRef(null);

  const clearInput = () => {
    onTextChange("");
  };

  return (
    <div
      className={`search-container ${hover && "hover"} ${active && "active"}`}
      onMouseEnter={onHover}
      onMouseLeave={() => {
        if (inputRef.current === document.activeElement) {
          return;
        }
        onHover(false);
      }}
    >
      <SearchIcon className="icon" fontSize="large" />
      <input
        className={`search-input ${hover && "hover"}`}
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={(e) => {
          onTextChange(e.target.value);
          if (e.target.value <= 0) {
            onFocus(false);
          } else {
            onFocus(true);
          }
        }}
        onFocus={() => {
          if (searchTerm <= 0) {
            onHover(true);
          } else {
            onFocus(true);
          }
        }}
        onBlur={() => {
          // onHover(false);
          // onFocus(false);
          // if(clickObject=="H2"){
          // }else{
          //   onHover(true);
          //   onFocus(true);

          // }
        }}
        ref={inputRef}
      />
      <CloseIcon className="icon" fontSize="large" onClick={clearInput} />
    </div>
  );
};

export default SearchBar;
