import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

      {props.cards.map(card => {
        return <Card card={card} key={Math.floor(Math.random() * 10 + 1)} />;
      })}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
};

export default Cards;
