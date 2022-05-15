import React from "react";

import { FilterIcon, XCircleIcon, TrashIcon } from "@heroicons/react/solid";
import FilterChip from "../FilterChip/FilterChip";
import styles from "./FilterBar.module.css";
import { categoryFilters } from "../../utils/categoryFilters";

interface Props {
  filters: string[];
  onFilterClick: (categoryId: string) => void;
  onRemoveFilter: (categoryId: string) => void;
  clearFilters: () => void;
}

const FilterBar = ({
  filters,
  onFilterClick,
  onRemoveFilter,
  clearFilters,
}: Props) => {
  const isActiveFilter = (filterId: string) => filters.includes(filterId);
  return (
    <div className={styles.filterContainer} id="filter-bar">
      <FilterIcon className={styles.filterIcon} />
      {categoryFilters.map((category) => (
        <FilterChip
          key={category.id}
          title={category.title}
          handleFilterChange={() => onFilterClick(category.id)}
          handleRemoveFilter={() => onRemoveFilter(category.id)}
          isActiveFilter={isActiveFilter(category.id)}
        />
      ))}

      {filters.length > 0 && (
        <TrashIcon
          className={styles.clearFiltersIcon}
          onClick={clearFilters}
          id="clear-filters-btn"
        />
      )}
    </div>
  );
};

export default FilterBar;
