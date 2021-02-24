import React from "react";
import "../css/admin.css";
import present from "../image/download.jpg";
import notpresent from "../image/download (1).png";
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
import { waiter } from "../dataset/waiterData";

function AdminWaiterPage() {
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
    <Container>
      <Row>
        {waiter.map((user) => (
          <Col xs={12} lg={4} md={6}>
            {user.status === "Active" ? (
              <CardDeck>
                <Card
                  border="secondary"
                  className="text-center mb-3 mt-3"
                  style={{
                    width: "18rem",
                    height: "16rem",
                    background: `linear-gradient(to bottom,#4dff03,#00d0ff )`,
                  }}
                >
                  {/* <Card.Img
                    variant="top"
                    src={present}
                    alt="Card image cap"
                    style={{ height: 30 }}
                  /> */}
                  <h5>
                    {" "}
                    <Card.Header style={{ backgroundColor: "grey" }}>
                      {user.name}
                    </Card.Header>
                  </h5>
                  <Card.Body>
                    <Card.Text> Status: {user.status}</Card.Text>
                    <Card.Text>Total Order Taken: {user.ordertaken}</Card.Text>
                    <Card.Text>Table no:{user.tableno}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      value={user.name}
                    >
                      Order Details
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header>Order Details</Modal.Header>
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
                  border="secondary"
                  className="text-center mb-3 mt-3"
                  style={{
                    width: "18rem",
                    height: "16rem",
                    background: `linear-gradient(to bottom,  #ffbc00,#ff0058)`,
                  }}
                >
                  {/* <Card.Img
                    variant="top"
                    src={notpresent}
                    alt="Card image cap"
                    style={{ height: 30 }}
                  /> */}
                  <h5>
                    {" "}
                    <Card.Header style={{ backgroundColor: "grey" }}>
                      {user.name}
                    </Card.Header>
                  </h5>
                  <Card.Body>
                    <Card.Text> Status: {user.status}</Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AdminWaiterPage;
