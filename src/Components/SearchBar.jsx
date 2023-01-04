import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBar.css";
import data from "../data.json";
import { useEffect, useState } from "react";
const SearchBar = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    $("input,.search").toggleClass("sb",toggle)
    $(".result-bar").toggleClass("dd",toggle)
    $(".line").toggleClass("linen",toggle)
    
  }, [toggle])
  
  const changeValue = (e) => {
    const word = e.target.value;
    setValue(word);

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(word.toLowerCase());
    });
    if (word === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setValue("");
  };

  const handleFocus = (e) => {
    setToggle(true)
  }
  const handleBlur = () => {
    setToggle(false)
    clearInput()
  }
  return (
    <>
      <div className="main-container-search" >
        <div className="search">
          <SearchIcon className="icon" fontSize="large" />
          <input type="text" placeholder={placeholder} onChange={changeValue} onFocus={handleFocus} onBlur={handleBlur}/>
          {filteredData.length != 0 ? (
            <CloseIcon className="icon" fontSize="large" onClick={clearInput} />
          ) : (
            <></>
          )}
        </div>
        <div className="line"></div>

        <div className="result-bar">
          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a
                    className="book-link"
                    href={value.link}
                    target="_blank"
                    key={value.title + value.link}
                  >
                    <h2 className="book-title">{value.title}</h2>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
