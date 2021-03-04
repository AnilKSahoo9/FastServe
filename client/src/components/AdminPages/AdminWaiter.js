import React from "react";
import "./AdminStyles.css";

import {
  Button,
  Modal,
  Card,
  CardDeck,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import { waiter } from "../../StaticData/waiterData";

const AdminWaiter = () => {
  const [show, setShow] = useState(false);
  const [val, setname] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setname(event.target.value);
  };
  const color1 = "";
  const color2 = "#B408A4";
  console.log(val);

  return (
    <Container className="inner-container">
      <Row>
        {waiter.map((user) => (
          <Col xs={12} lg={4} md={6}>
            {user.status === "Active" ? (
              <CardDeck>
                <Card
                  className="waitercard text-center mb-3 mt-3"
                  style={{
                    width: "17rem",
                    height: "14.5rem",
                    background: `linear-gradient(to bottom,#4dff03,#00d0ff )`,
                  }}
                >
                  <h4>
                    {" "}
                    <Card.Header
                      style={{
                        backgroundColor: "#f2f2f2",
                        fontFamily: "Times New Roman, Times, serif",
                        fontWeight: 750,
                      }}
                    >
                      ~: {user.name} :~
                    </Card.Header>
                  </h4>
                  <Card.Body>
                    <b>Status:</b> {user.status}
                    <br />
                    <b>Total Order Taken:</b> {user.ordertaken}
                    <br />
                    <b> Table no: </b>
                    {user.tableno}
                    <br />
                    <br />
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      value={user.name}
                    >
                      Order Details
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>Order Details</Modal.Header>
                      <Modal.Body>
                        {waiter.map((users) =>
                          users.name === val
                            ? users.orderdetails.map((number) => (
                                <li>{number}</li>
                              ))
                            : ""
                        )}
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Card>
              </CardDeck>
            ) : (
              <CardDeck>
                <Card
                  className="waitercard text-center mb-3 mt-3"
                  style={{
                    width: "17rem",
                    height: "14.5rem",
                    background: `linear-gradient(to bottom,  #ffbc00,#ff0058)`,
                  }}
                >
                  <h4>
                    {" "}
                    <Card.Header
                      style={{
                        backgroundColor: "#f2f2f2",
                        fontFamily: "Times New Roman, Times, serif",
                        fontWeight: 750,
                      }}
                    >
                      ~: {user.name} :~
                    </Card.Header>
                  </h4>
                  <Card.Body>
                    <b>Status:</b> {user.status}
                  </Card.Body>
                </Card>
              </CardDeck>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AdminWaiter;
