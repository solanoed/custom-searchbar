import React, { useEffect, useRef, useState } from "react";
import { ListBar } from "./ListBar";
import SearchBar from "./SearchBar";
import data from "../data.json";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
export const App = () => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const onInputFocus = (val) => {
    setActive(val);
  };
  const onHover = (val) => {
    setHover(val);
  };
  const onTextChange = (w) => {
    setSearchTerm(w);
  };

  const filteredData = searchTerm
    ? data.filter((value) => {
        return value.title.toLowerCase().includes(searchTerm.toLowerCase());
      })
    : [];

  if (filteredData.length < 1 && active == true) {
    setActive(false);
  }

  useOnClickOutside(ref, () => {
    onHover(false);
    onInputFocus(false);
  });

  return (
    <div className="main-container" ref={ref}>
      <h1 className="logo-text">The Searchbar</h1>
      <SearchBar
        placeholder={"Ingrese el contenido a Buscar"}
        hover={hover}
        onHover={onHover}
        onFocus={onInputFocus}
        active={active}
        searchTerm={searchTerm}
        onTextChange={onTextChange}
      />
      {active && <span className="span-line"></span>}
      <ListBar
        list={filteredData.slice(0, 10)}
        active={active}
        onHover={onHover}
        onFocus={onInputFocus}
      />
    </div>
  );
};
