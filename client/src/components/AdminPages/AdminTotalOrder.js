import React, { useState, useEffect } from "react";
import { Card, Button, Header, Table, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { data } from "../../StaticData/tableOrderData";
import { parcel } from "../../StaticData/parcelData";

const AdminTotalOrder = () => {
  const [count, setCount] = useState(0);

  const cal = () => {
    console.log("arati");
    setCount(count + 1);
  };

  return (
    <div
      classname="inner-container"
      // style={{
      //   width: "100%",
      //   height: "100vh",
      //   backgroundImage: `linear-gradient(90deg,#ffdead 50%,#faf0e6 50%)`,
      // }}
    >
      <Row>
        <Col md={6} xs={12}>
          <h2>-:Table Order Details:-</h2>
          {data.map((val, index) => (
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Card.Header} eventKey={String(index)}>
                    <h5>Table: {val.tableNo}</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body>
                    {val.session.map((value, index) => (
                      <Accordion>
                        <Card>
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey={String(index)}
                          >
                            <h5>Session:{value.sessionNo}</h5>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={String(index)}>
                            <Card.Body>
                              <h5>Order delivered by {value.waiter}</h5>
                              <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th>Sl no.</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                  </tr>
                                </thead>

                                {value.orderdetails.map((valueitem, index) => (
                                  <tbody>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{valueitem.items}</td>
                                      <td>{valueitem.quantity}</td>
                                      <td>
                                        {valueitem.quantity * valueitem.amount}
                                      </td>
                                    </tr>
                                  </tbody>
                                ))}

                                <tr>
                                  <th>Total:</th>
                                  <td colspan="3">400</td>
                                </tr>
                              </Table>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </Col>
        <Col md={6} xs={12}>
          <h2>-:Parcel Details:-</h2>
          {parcel.map((val) =>
            val.session.map((value, index) => (
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={String(index)}>
                      <h5>Session:{value.sessionNo}</h5>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={String(index)}>
                    <Card.Body>
                      <h5>Order delivered by {value.waiter}</h5>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Sl no.</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>

                        {value.orderdetails.map((valueitem, index) => (
                          <tbody>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{valueitem.items}</td>
                              <td>{valueitem.quantity}</td>
                              <td>{valueitem.quantity * valueitem.amount}</td>
                            </tr>
                          </tbody>
                        ))}

                        <tr>
                          <th>Total:</th>
                          <td colspan="3">400</td>
                        </tr>
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminTotalOrder;
