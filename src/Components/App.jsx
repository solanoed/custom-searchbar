import React, { useState } from "react";
import { ListBar } from "./ListBar";
import SearchBar from "./SearchBar";
import data from "../data.json";
export const App = () => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const onInputFoucs = (val) => {
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

  return (
    <div className="main-container">
      <SearchBar
        placeholder={"Ingrese el contenido a Buscar"}
        hover={hover}
        onHover={onHover}
        active={active}
        onFocus={onInputFoucs}
        searchTerm={searchTerm}
        onTextChange={onTextChange}
      />
      {active && <span className="span-line"></span>}
      <ListBar list={filteredData.slice(0, 10)} active={active} />
    </div>
  );
};
