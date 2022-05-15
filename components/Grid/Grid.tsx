import React from "react";
import styles from "./Grid.module.css";
import GameTile from "../GameTile/GameTile";

import { Game } from "../../utils/types";

interface Props {
  casinoGames: Game[];
}

const Grid = ({ casinoGames }: Props) => {
  const [validGames, setValidGames] = React.useState(casinoGames);

  React.useLayoutEffect(() => {
    const gamesWithBg = casinoGames.filter(
      (game) => game.background && game.background?.length > 0
    );
    setValidGames(gamesWithBg);
  }, [casinoGames]);

  return (
    <div className={styles.wrapperGrid} id="casino-lobby-list">
      {validGames.map((game) => (
        <GameTile key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Grid;
