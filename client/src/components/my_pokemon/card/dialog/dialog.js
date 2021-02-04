import React from "react";
import { Container, Modal, Button } from "react-bootstrap";

const dialog = ({ show, onHide, pokemon }) => {
  const releasePokemon = () => {
    let currentCatchedPokemons = JSON.parse(localStorage.getItem("myPokemon"));
    let newPokemonsDataset = currentCatchedPokemons.filter(
      (item) => item.nickname !== pokemon.nickname
    );
    localStorage.setItem("myPokemon", JSON.stringify(newPokemonsDataset));
    alert("Pokemon successfully deleted!");
    window.location.reload();
  };

  return (
    <div>
      <Modal show={show} onHide={onHide} backdrop="static" centered>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>
            <b>Release Pokemon</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: 20 }}>
          <Container>Do you want to release {pokemon.nickname}?</Container>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button variant="danger" onClick={onHide}>
            NO
          </Button>
          <Button variant="primary" onClick={releasePokemon}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default dialog;
