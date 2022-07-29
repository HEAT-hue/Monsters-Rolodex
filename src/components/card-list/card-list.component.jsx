// jshint esversion:6

import CardContainer from "../card-container/card-container.component";

import "./card-list.styles.css";

const log = console.log;

function CardList(props) {
  // destructure Component props
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <CardContainer
            key={id}
            monsterId={id}
            monsterName={name}
            monsterEmail={email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
