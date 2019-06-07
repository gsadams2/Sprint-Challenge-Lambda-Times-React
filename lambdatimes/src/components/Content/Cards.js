import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cards = props => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

      {props.cards.map(card => {
        return <Card card={card} key={Math.round(Math.random() * 200)} />;
      })}
    </CardsContainer>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  card: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
};

export default Cards;
