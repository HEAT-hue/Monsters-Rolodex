// jshint esversion:6
import { Component } from "react";

import "./card-container.styles.css";

const log = console.log;

class CardContainer extends Component {
    render() {
        const {monsterId, monsterName, monsterEmail} = this.props;
        return (
            <div className="card-container" key={monsterId}>
              <img
                src={`https://robohash.org/${monsterId}?set=set2&size=150x150`}
                alt="monster"
              />
              <h2>{monsterName}</h2>
              <p>{monsterEmail}</p>
            </div>
        )
    }
}

export default CardContainer;