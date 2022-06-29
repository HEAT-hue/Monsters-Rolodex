// jshint esversion:6
import { Component } from "react";

import CardContainer from "../card-container/card-container.component";

import "./card-list.styles.css";

const log = console.log;

class CardList extends Component {
  render() {
    // destructure Component props
    const { monsters } = this.props;
    log(monsters);

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <CardContainer
              monsterId={id}
              monsterName={name}
              monsterEmail={email}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
