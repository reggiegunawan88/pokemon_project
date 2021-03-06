import React, { useState } from "react";
import { Modal, Button, Row, Col, Container, Image } from "react-bootstrap";

/**
 *
 * @param {
 * show: toggle open modal
 * data: pokemon data
 * closeModal: callback to close modal
 * }
 */
const modal = ({ show, data, closeModal }) => {
  const [nickname, setNickname] = useState("");

  /**
   * function: catch_pokemon
   * description: catch and give nickname to pokemon
   */
  const catch_pokemon = () => {
    var pokemon = { ...data.pokemon, nickname: nickname };

    //get data from localstorage
    let currentCatchedPokemons = JSON.parse(
      localStorage.getItem("myPokemon") || "[]"
    );

    //similar pokemon nickname validation
    const foundSimilar = currentCatchedPokemons.some(
      (pokemon) => pokemon.nickname.toUpperCase() === nickname.toUpperCase()
    );

    if (foundSimilar) {
      alert("You have owned a pokemon with current nickname");
    } else {
      alert("Pokemon catched! Go to My Pokemon menu to see your pokemons");
      currentCatchedPokemons.push(pokemon);
      localStorage.setItem("myPokemon", JSON.stringify(currentCatchedPokemons)); //save to local storage
      closeModal();
    }
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
                  onChange={(e) => setNickname(e.target.value)}
                />
              </Container>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button variant="danger" onClick={closeModal}>
            RELEASE
          </Button>
          <Button variant="primary" onClick={catch_pokemon}>
            CATCH
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default modal;
