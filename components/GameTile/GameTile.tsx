import React from "react";
import styles from "./GameTile.module.css";
import Image from "next/image";

import { Game } from "../../utils/types";

interface Props {
  game: Game;
}

const GameTile = ({ game }: Props) => {
  const { background, name } = game;
  const [src, setSrc] = React.useState(background || "");

  return (
    <>
      {background && (
        <div className={styles.container}>
          <div className={styles.content}>
            <Image
              src={src}
              className={styles.bannerImage}
              alt="profile image"
              layout="fill"
              placeholder="blur"
              blurDataURL={src}
              onError={() =>
                setSrc(
                  "https://www.cmsbetconstruct.com/content/images/casino/background/BSGBSMRVEGAS.jpg"
                )
              }
            />
            <div className={styles.name}>
              <h4>{name}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameTile;
