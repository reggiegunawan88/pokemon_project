import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./card";

const index = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Card>
      <Image style={{ height: "auto" }} src={pokemon.image} ui={false} />
      <Card.Content>
        <Card.Header>{pokemon.name}</Card.Header>
        <Card.Meta>
          <span>#{pokemon.number}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {/* <a>
        {pokemon.types}
      </a> */}
      </Card.Content>
    </Card>
  );
};

export default index;
