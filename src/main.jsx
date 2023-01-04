import React from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./Components/SearchBar";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="main-container">
      <SearchBar placeholder={'Ingrese el libro a Buscar'}/>
    </div>
  </>
);
