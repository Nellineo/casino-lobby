import React from "react";
import { Game } from "../../utils/types";
import FilterBar from "../FilterBar/FilterBar";
import SearchBar from "../SearchBar/SearchBar";

import styles from "./Header.module.css";

interface Props {
  query: string;
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[] | never[]>>;
  setQuery: (query: string) => void;
}

const Header = ({ filters, query, setFilters, setQuery }: Props) => {
  const handleFilterClick = (fitlerId: string) => {
    if (!filters.includes(fitlerId)) {
      setFilters([...filters, fitlerId]);
    }
  };

  const handleRemoveFilter = (filterId: string) => {
    const formattedFilters = filters.filter((filter) => !(filter === filterId));
    setFilters(formattedFilters);
  };

  const clearFilters = () => setFilters([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setQuery(e.target.value);
  };

  return (
    <header className={styles.header}>
      <SearchBar handleSearch={handleSearch} query={query} />
      <FilterBar
        filters={filters}
        onFilterClick={handleFilterClick}
        onRemoveFilter={handleRemoveFilter}
        clearFilters={clearFilters}
      />
    </header>
  );
};

export default Header;
