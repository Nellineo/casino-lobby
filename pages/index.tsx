import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header/Header";
import Grid from "../components/Grid/Grid";
import styles from "../styles/Home.module.css";
import { response as casinoGames } from "../utils/response";
import { Game } from "../utils/types";

import {
  filterCasinoGames,
  searchCasinoGamesByName,
} from "../utils/filterCasinoGames";

const Home: NextPage = () => {
  const [displayedGames, setDisplayedGames] =
    React.useState<Game[]>(casinoGames);
  const [filters, setFilters] = React.useState<string[]>([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (filters.length > 0) {
      const filteredGames = filterCasinoGames(casinoGames, filters);
      setDisplayedGames(filteredGames);
    } else setDisplayedGames(casinoGames);
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (query.length > 0) {
      const filteredGames = searchCasinoGamesByName(displayedGames, query);
      setDisplayedGames(filteredGames);
    } else if (filters.length > 0) {
      const filteredGames = filterCasinoGames(casinoGames, filters);
      setDisplayedGames(filteredGames);
    } else setDisplayedGames(casinoGames);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.container}>
      <Head>
        <title>Casino Lobby</title>
        <meta
          name="description"
          content="Casino lobby - huge games selection"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          filters={filters}
          query={query}
          setFilters={setFilters}
          setQuery={setQuery}
        />
        <Grid casinoGames={displayedGames} />
      </main>
    </div>
  );
};

export default Home;
