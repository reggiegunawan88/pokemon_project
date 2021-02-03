import React, { useState } from "react";
import { Modal, Button, Row, Col, Container, Image } from "react-bootstrap";

const modal = ({ show, data, closeModal }) => {
  const [pokemon, setPokemon] = useState(data.pokemon);
  const [nickname, setNickname] = useState("");

  const submit_pokemon = () => {
    console.log(nickname);
  };

  return (
    <div>
      <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: 20 }}>
          <Container>
            <Row>
              <Col sm={12}>You obtained :</Col>
            </Row>
            <Row>
              <Container style={{ display: "row", textAlign: "center" }}>
                <h3>{data.pokemon.name}</h3>
                <Image
                  src={data.pokemon.image}
                  style={{ width: "auto", height: 200 }}
                />
              </Container>
            </Row>
            <Row>
              <Container style={{ display: "row", textAlign: "center" }}>
                <p>Please give nickname to your pokemon :</p>
                <input
                  style={{ borderRadius: 5 }}
                  type="text"
                  onChange={(e) => setNickname({ nickname: e.target.value })}
                />
              </Container>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button variant="danger" onClick={closeModal}>
            Release
          </Button>
          <Button variant="primary" onClick={submit_pokemon}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default modal;
