import React from "react";
import "../../css/admin.css";

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
                    maxwidth: '100%',
                    // height:"15rem",
                    maxheight: "100rem",
                    // color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '25px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,1.0);',
                    // backgroundImage: `linear-gradient(to bottom,#4dff03,#00d0ff )`
                    backgroundImage: `linear-gradient(to right bottom, #0070BB, #132257, #004170, #00b98a, #009b7d)`
                  }}
                >
                  <h4>
                    {" "}
                    <Card.Header
                      style={{
                        color: "white", borderRadius: '7px', fontSize: "25px",
                        padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                      }}
                    >
                      <b> {user.name} </b>
                    </Card.Header>
                  </h4>
                  <Card.Body style={{ color: "white", fontSize: "15px", padding: "0px", paddingBottom: "10px" }}>
                    <b>Status:</b> {user.status}
                    <br />
                    <b>Total Order Taken:</b> {user.ordertaken}
                    <br />
                    <b> Table no: </b>
                    {user.tableno}
                    <br />
                    <br />
                    <Button style={{ backgroundColor: "#d11d72" }}
                      // #F6C700
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
                    maxwidth: '100%',
                    height: "12rem",
                    // maxheight: "16rem",

                    // color: 'black',
                    fontFamily: "Times New Roman, Times, serif",
                    margin: '2rem',
                    borderStyle: 'groove',
                    borderWidth: '3px',
                    borderRadius: '25px',
                    // boxShadow: '20px 20px 50px grey',
                    backgroundImage: `linear-gradient(to right bottom,#ff4500,#800080,#ff1493)`
                  }}
                >
                  {/* #ffbc00,#ff1493 */}
                  <h4>
                    {" "}
                    <Card.Header
                      style={{
                        color: "white", borderRadius: '7px', fontSize: "25px",
                        padding: "3px", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", marginTop: "10px"
                      }}
                    >
                      <b> {user.name}</b>
                    </Card.Header>
                  </h4>
                  <Card.Body style={{ color: "white", fontSize: "15px" }}>
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
