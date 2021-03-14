import React, { useState } from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { data } from "../../StaticData/tableOrderData";
import { parcel } from "../../StaticData/parcelData";

const AdminTotalOrder = () => {
  // const [count, setCount] = useState(0);

  // const cal = () => {
  //   console.log("arati");
  //   setCount(count + 1);
  // };

  return (
    <div
      classname="main"
      style={{
        width: "100%",
        height: "100%",
        background: " radial-gradient(#e0e0eb, #ffff, #e0e0eb)",
      }}
    >
      <Row>
        <Col md={6} xs={12}>
          <h2>-:Table Order Details:-</h2>
          {data.map((val, index) => (
            <Accordion
              style={{
                boxShadow: "5px 10px 20px 5px rgba(0, 0, 0, 0.253)",
                borderRadius: "0.10rem",
                
              }}
            >
              <Card style={{ backgroundColor: "#ffe6ff" }}>
                <Card.Header style={{ backgroundColor: "#e6ccff" }}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey={String(index)}
                    style={{ backgroundColor: "#f3e6ff" }}
                  >
                    <h5>Table: {val.tableNo}</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body>
                    {val.session.map((value, index) => (
                      <Accordion>
                        <Card>
                          <Card.Header style={{ backgroundColor: "#e6ccff" }}>
                            <Accordion.Toggle
                              as={Card.Header}
                              eventKey={String(index)}
                              style={{ backgroundColor: "#f3e6ff" }}
                            >
                              <h5>Session:{value.sessionNo}</h5>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={String(index)}>
                            <Card.Body>
                              <h5>Order delivered by {value.waiter}</h5>
                              <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th style={{ backgroundColor: "#ffe6ff" }}>
                                      Sl no.
                                    </th>
                                    <th style={{ backgroundColor: "#ffe6ff" }}>
                                      Item
                                    </th>
                                    <th style={{ backgroundColor: "#ffe6ff" }}>
                                      Quantity
                                    </th>
                                    <th style={{ backgroundColor: "#ffe6ff" }}>
                                      Price
                                    </th>
                                  </tr>
                                </thead>

                                {value.orderdetails.map((valueitem, index) => (
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          backgroundColor: "white",
                                        }}
                                      >
                                        {index + 1}
                                      </td>
                                      <td
                                        style={{
                                          backgroundColor: "white",
                                        }}
                                      >
                                        {valueitem.items}
                                      </td>
                                      <td
                                        style={{
                                          backgroundColor: "white",
                                        }}
                                      >
                                        {valueitem.quantity}
                                      </td>
                                      <td
                                        style={{
                                          backgroundColor: "white",
                                        }}
                                      >
                                        {valueitem.quantity * valueitem.amount}
                                      </td>
                                    </tr>
                                  </tbody>
                                ))}

                                <tr>
                                  <th style={{ backgroundColor: "#ffe6ff" }}>
                                    Total:
                                  </th>
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
              <Accordion
                style={{
                  boxShadow: "5px 10px 20px 5px rgba(0, 0, 0, 0.253)",
                  borderRadius: "0.10rem",
                }}
              >
                <Card>
                  <Card.Header style={{ backgroundColor: "#e6ccff" }}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey={String(index)}
                      style={{ backgroundColor: "#f3e6ff" }}
                    >
                      <h5>Session:{value.sessionNo}</h5>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={String(index)}>
                    <Card.Body>
                      <h5>Order delivered by {value.waiter}</h5>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: "#ffe6ff" }}>
                              Sl no.
                            </th>
                            <th style={{ backgroundColor: "#ffe6ff" }}>Item</th>
                            <th style={{ backgroundColor: "#ffe6ff" }}>
                              Quantity
                            </th>
                            <th style={{ backgroundColor: "#ffe6ff" }}>
                              Price
                            </th>
                          </tr>
                        </thead>

                        {value.orderdetails.map((valueitem, index) => (
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  backgroundColor: "white",
                                }}
                              >
                                {index + 1}
                              </td>
                              <td
                                style={{
                                  backgroundColor: "white",
                                }}
                              >
                                {valueitem.items}
                              </td>
                              <td
                                style={{
                                  backgroundColor: "white",
                                }}
                              >
                                {valueitem.quantity}
                              </td>
                              <td
                                style={{
                                  backgroundColor: "white",
                                }}
                              >
                                {valueitem.quantity * valueitem.amount}
                              </td>
                            </tr>
                          </tbody>
                        ))}

                        <tr>
                          <th style={{ backgroundColor: "#ffe6ff" }}>Total:</th>
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
