import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import { Table } from "react-bootstrap";
import ModalPopup from "./modal/modal";
import "./index.css";

const index = (props) => {
  const data = props.location.state;

  const [snackbar, setSnackbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const close_modal = () => {
    setShowModal(false);
  };

  const handle_catch = () => {
    var random = Math.random();
    if (random > 0.5) {
      setSnackbar(false);
      setShowModal(true);
    } else {
      setSnackbar(true);
    }
  };

  return (
    <div>
      <div style={{ margin: 15 }}>
        <h2>#{data.pokemon.number}</h2>
        <h2>{data.pokemon.name}</h2>
      </div>
      <section>
        <Grid container spacing={3} style={{ marginTop: 25 }}>
          <Grid item xs={4}>
            <h3>Pokemon Type</h3>
            <div className="pokemon-types">
              {data.pokemon.types.map((type) => (
                <p className="pokemon-type" key={type}>
                  {type}
                </p>
              ))}
            </div>
          </Grid>
          <Grid item xs={4}>
            <img className="pokemon-img" src={data.pokemon.image} />
            <div className="btn-section">
              <button className="pokeball-btn" onClick={handle_catch}>
                <img
                  className="pokeball-logo"
                  src={require("./../../asset/pokeball.png")}
                />
              </button>
              <p>
                <b>CATCH POKEMON</b>
              </p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="container">
              <h3>Pokemon Data</h3>
              <Table responsive bordered style={{ textAlign: "left" }}>
                <tbody>
                  <tr>
                    <th>National No</th>
                    <td>{data.pokemon.number}</td>
                  </tr>
                  <tr>
                    <th>Species</th>
                    <td>{data.pokemon.classification}</td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td>{data.pokemon.height.maximum}</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>{data.pokemon.weight.maximum}</td>
                  </tr>
                  <tr>
                    <th>Attacks</th>
                    <td>
                      {data.pokemon.attacks.special.map((skill) => (
                        <p key={skill.name}>{skill.name + "\n"}</p>
                      ))}
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <th>Max HP</th>
                    <td>{data.pokemon.maxHP}</td>
                  </tr>
                  <tr>
                    <th>Max CP</th>
                    <td>{data.pokemon.maxCP}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Grid>
        </Grid>
      </section>
      <Snackbar open={snackbar} autoHideDuration={300}>
        <Alert elevation={6} variant="filled" severity="warning">
          Pokemon not yet obtained
        </Alert>
      </Snackbar>
      <ModalPopup show={showModal} data={data} closeModal={close_modal} />
    </div>
  );
};

export default index;
