
const SearchBar = ({placeholder}) => {
  return (
    <div className="search">
      <input type="text" placeholder={placeholder}/>
      <img src='../assets/favicon.svg' alt="Search" />
    </div>
  )
}

export default SearchBar