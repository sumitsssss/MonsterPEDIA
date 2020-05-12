import React from "react";
import Card from '../card/card.components';
import './card-list.components.style.css';

const CardList = (props) => {
  
  
  return (<div className="card-list">

{props.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <Card monster = {monster}/>
          </div>
        );
      })}
  </div>
  )};


export default CardList;
