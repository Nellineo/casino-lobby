import React from "react";
import styles from "./FilterChip.module.css";
import { XCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";

interface Props {
  title: string;
  handleFilterChange: () => void;
  handleRemoveFilter: () => void;
  isActiveFilter: boolean;
}

const FilterChip = ({
  title,
  handleFilterChange,
  handleRemoveFilter,
  isActiveFilter,
}: Props) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.activeContainer]: isActiveFilter,
      })}
      id="filter-chip"
    >
      <button
        className={clsx(styles.chip, {
          [styles.activeChip]: isActiveFilter,
        })}
        onClick={handleFilterChange}
      >
        {title}
      </button>
      {isActiveFilter && (
        <XCircleIcon
          onClick={handleRemoveFilter}
          className={styles.filterIcon}
        />
      )}
    </div>
  );
};

export default FilterChip;
