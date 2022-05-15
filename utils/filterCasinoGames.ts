import { Game } from "./types";

const isEqualArray = (array1: string[], array2: string[]) =>
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.length === array2.length &&
  array1.every((val, index) => val === array2[index]);

export const searchCasinoGamesByName = (casinoGames: Game[], query: string) => {
  const searchRegex = new RegExp(query, "gi");
  const filteredGames = casinoGames.filter((game) =>
    game.name.match(searchRegex)
  );
  return filteredGames;
};

export const filterCasinoGames = (casinoGames: Game[], filters: string[]) => {
  const filteredGames = casinoGames.filter((game) =>
    isEqualArray(game.categories.sort(), filters.sort())
  );
  console.log("xxx", JSON.stringify(filteredGames), filters);
  return filteredGames;
};
