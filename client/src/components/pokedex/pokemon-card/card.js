import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "./card.css";

/* @param: pokemon data */
const index = ({ pokemon }) => {
  return (
    <Link
      to={{ pathname: `/pokedex/${pokemon.name}`, state: { pokemon: pokemon } }}
    >
      <Card className="card-body">
        <Image className="img-card" src={pokemon.image} />
        <Card.Content>
          <Card.Header>{pokemon.name}</Card.Header>
          <Card.Meta>
            <span>
              <b>#{pokemon.number}</b>
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="types-section">
            <a>{pokemon.types[0]}</a>
            {pokemon.types[1] !== undefined && <a>{pokemon.types[1]}</a>}
          </div>
        </Card.Content>
      </Card>
    </Link>
  );
};

export default index;
