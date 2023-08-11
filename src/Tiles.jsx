import React from "react";

function Tiles() {
  const createTiles = (list) => {
    list.map((x) => {
      return <div className="tile"></div>;
    });
  };

  return <div>Tile</div>;
}

export default Tiles;
