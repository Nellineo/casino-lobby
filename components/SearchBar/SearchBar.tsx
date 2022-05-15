import React from "react";
import styles from "./SearchBar.module.css";

interface Props {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
}

const SearchBar = ({ handleSearch, query }: Props) => {
  return (
    <div className={styles.container}>
      <input
        placeholder="Search Games"
        onChange={handleSearch}
        value={query}
        className={styles.searchBar}
        id="search-bar"
      />
    </div>
  );
};

export default SearchBar;
