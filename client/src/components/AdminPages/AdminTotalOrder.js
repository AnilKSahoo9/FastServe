import React, { useState ,useEffect} from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import axios from 'axios';

const AdminTotalOrder = () => {
  const [responseData,setResponseData] = useState([]);
  const [tableOrders,setTableOrders] = useState([]);
  const [parcelOrders,setParcelOrders] = useState([]);
  const fetchData = () => {
    axios.get(`http://localhost:4000/admin-totalorders`).then((response) => {
      setResponseData(response.data);
      setTableOrders(response.data.tableOrders);
      setParcelOrders(response.data.parcelOrders);
    })
  }

useEffect(() => {
  fetchData();
},[tableOrders,parcelOrders])

  return (
    <div
      classname="main"
      style={{
        width: "175vh",
      }}
    >
      <Row>
        <Col md={6} xs={12}>
          <h2>-:Table Order Details:-</h2>
          {tableOrders.map((val, index) => (
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
                    {val.sessions.map((value, index) => (
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
                              <h5>Order delivered by {value.waiterName}</h5>
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

                                {value.orderDetails.map((valueitem, index) => (
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
                                        {valueitem.name}
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
                                        {valueitem.price}
                                      </td>
                                    </tr>
                                    <tr>
                                  <th style={{ backgroundColor: "#ffe6ff" }}>
                                    Total:
                                  </th>
                                  <td colspan="3">{valueitem.quantity * valueitem.price}</td>
                                </tr>
                                  </tbody>
                                ))}
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
          {parcelOrders.map((val,index) =>
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
                      <h5>ParcelNo:{val.parcelNo}</h5>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={String(index)}>
                    <Card.Body>
                      <h5>Order delivered by {val.billerName}</h5>
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

                        {val.orderDetails.map((valueitem, index) => (
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
                                {valueitem.name}
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
                                {valueitem.price}
                              </td>
                            </tr>
                            <tr>
                                  <th style={{ backgroundColor: "#ffe6ff" }}>
                                    Total:
                                  </th>
                                  <td colspan="3">{valueitem.quantity * valueitem.price}</td>
                                </tr>
                          </tbody>
                        ))}
                      </Table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminTotalOrder;
