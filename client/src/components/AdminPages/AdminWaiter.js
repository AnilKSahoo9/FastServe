import React from "react";
import "../../css/admin.css";
import "../../css/AdminStyles.css";
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

  
  return (
    <div className="inner-container">
    <div className="admin_parent_div_cards">
      <Row className="admin_table_Design">
        {waiter.map((user) => (
          <Col xs={12} lg={4} md={6}>
            {user.status === "Active" ? (
              <CardDeck className="waiter_parent_card">
                <Card className="waiterCard text-center mb-3 mt-3">
                  <h4>
                    {" "}
                    <Card.Header className="waiterCardHeader">
                      <b> {user.name} </b>
                    </Card.Header>
                  </h4>
                  <Card.Body className="waiterCardBody">
                    <b>Status:</b> {user.status}
                    <br />
                    <b>Total Order Taken:</b> {user.ordertaken}
                    <br />
                    <b> Table no: </b>
                    {user.tableno}
                    <br />
                    <br />
                    <Button
                      className="waiterButton"
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
                <Card className="waiterAbsentCard text-center mb-3 mt-3">
                  <h4>
                    {" "}
                    <Card.Header className="waiterCardHeader">
                      <b> {user.name}</b>
                    </Card.Header>
                  </h4>
                  <Card.Body className="waiterAbsentCardBody">
                    <b>Status:</b> {user.status}
                  </Card.Body>
                </Card>
              </CardDeck>
            )}
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
};

export default AdminWaiter;
