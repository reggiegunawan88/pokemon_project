import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";
import { Button } from "react-bootstrap";
import "./my-pokemon.css";
import Dialog from "./dialog/dialog";

const MyPokemonCard = ({ pokemon }) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Card className="card-body">
      <Image className="img-card" src={pokemon.image} />
      <Card.Content>
        <Card.Header>
          {pokemon.name} - {pokemon.nickname}
        </Card.Header>
        <Card.Meta>
          <span>
            <b>#{pokemon.number}</b>
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="types-section">
          <Button variant="danger" onClick={() => setShowDialog(true)}>
            <b>RELEASE</b>
          </Button>
        </div>
      </Card.Content>
      <Dialog
        show={showDialog}
        onHide={() => setShowDialog(false)}
        pokemon={pokemon}
      />
    </Card>
  );
};

export default MyPokemonCard;
