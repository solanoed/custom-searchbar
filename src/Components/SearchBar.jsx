import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBar.css";
import data from "../data.json";
const SearchBar = ({ placeholder }) => {
  return (
    <>
      <div className="main-container-search">
        <div className="search">
          <SearchIcon className="icon" fontSize="large" />
          <input type="text" placeholder={placeholder} />
          <CloseIcon className="icon" fontSize="large" />
        </div>
        <div className="line"></div>

        <div className="result-bar">
          {data.map((b) => {
            return (
              <a href={b.link} className="book-link" target={"_blank"} key={b.title+b.year} >
                <h2 className="book-title">{b.title}</h2>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
