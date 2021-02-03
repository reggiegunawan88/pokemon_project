import { CardMedia } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "./card.css";

const index = ({ pokemon }) => {
  const styles = {
    media: {
      height: 0,
      paddingTop: "75.25%", // 16:9,
      marginTop: "30",
    },
  };
  return (
    <Link
      to={{ pathname: `/pokedex/${pokemon.name}`, state: { pokemon: pokemon } }}
    >
      <Card className="card-body">
        <Image className="img-card" src={pokemon.image} />
        <Card.Content>
          {/* <img src={pokemon.image} alt={pokemon.name} /> */}
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
