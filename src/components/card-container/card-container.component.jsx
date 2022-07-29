// jshint esversion:6
import { Component } from "react";

import "./card-container.styles.css";

const log = console.log;

function CardContainer(props) {
  // Destructure properties from props
  const { monsterId, monsterName, monsterEmail } = props;

  return (
    <div className="card-container" key={monsterId}>
      <img
        src={`https://robohash.org/${monsterId}?set=set2&size=150x150`}
        alt="monster"
      />
      <h2>{monsterName}</h2>
      <p>{monsterEmail}</p>
    </div>
  );
}

export default CardContainer;
