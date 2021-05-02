import React, { useState, useEffect } from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import io from "socket.io-client";
import "../AdminPages/AdminStyles.css";
let socket;

const AdminTotalOrder = () => {
  const [responseData, setResponseData] = useState([]);
  const [tableOrders, setTableOrders] = useState([]);
  const [parcelOrders, setParcelOrders] = useState([]);
  const ENDPOINT = "ws://localhost:4000/api/socket";
  let connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:4000/admin-totalorders/`
    );
    setResponseData(response.data);
    setTableOrders(response.data.tableOrders);
    setParcelOrders(response.data.parcelOrders);
  };

  useEffect(() => {
    socket = io(ENDPOINT, connectionOptions);
    console.log(socket);
    socket.on("parcelData", (parcelData) => {
      //console.log(parcelData);
      let parcelData2 = {};
      parcelData2 = parcelData;
      parcelOrders.push(parcelData2);
      socket.emit("my", { name: "sweta" });
    });

    socket.on("sessionData", (sessionData) => {
      //console.log(sessionData);
      let sessionData2 = {};
      sessionData2 = sessionData;
      tableOrders.push(sessionData2);
    });
    //console.log(tableOrders);
    fetchData();
    // return () => {
    //   //socket.disconnect();
    //   socket.emit("disconnect",(d) => {});
    //   socket.off();
    // }
  }, [parcelOrders, tableOrders, ENDPOINT]);

  return (
    <div className="inner-container">
      <Row>
        <Col md={6} xs={12}>
          <h2>-:Table Order Details:-</h2>
          {tableOrders.map((val, index) => (
            <Accordion className="accordion">
              <Card className="cards">
                <Card.Header className="headers">
                  <Accordion.Toggle
                    className="accordiontoggle"
                    as={Card.Header}
                    eventKey={String(index)}
                  >
                    <h5>Table: {val.tableNo}</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body>
                    {val.sessions.map((value, index) => (
                      <Accordion>
                        <Card>
                          <Card.Header className="headers">
                            <Accordion.Toggle
                              className="accordiontoggle"
                              as={Card.Header}
                              eventKey={String(index)}
                            >
                              <h5>Session:{val.sessions.length}</h5>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={String(index)}>
                            <Card.Body>
                              <h5>Order delivered by {value.waiterName}</h5>
                              <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th className="th">Sl no.</th>
                                    <th className="th">Item</th>
                                    <th className="th">Quantity</th>
                                    <th className="th">Price</th>
                                  </tr>
                                </thead>

                                {value.orderDetails.map((valueitem, index) => (
                                  <tbody>
                                    <tr>
                                      <td className="td">{index + 1}</td>
                                      <td className="td">{valueitem.name}</td>
                                      <td className="td">
                                        {valueitem.quantity}
                                      </td>
                                      <td className="td">{valueitem.price}</td>
                                    </tr>
                                    <tr>
                                      <th className="th">Total:</th>
                                      <td colspan="3">
                                        {valueitem.quantity * valueitem.price}
                                      </td>
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
          {/* {console.log(parcelOrders)} */}
          {parcelOrders.map((val, index) => (
            <Accordion className="accordion">
              <Card>
                <Card.Header className="headers">
                  <Accordion.Toggle
                    className="accordiontoggle"
                    as={Card.Header}
                    eventKey={String(index)}
                  >
                    <h5>ParcelNo:</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body>
                    <h5>Order delivered by {val.billerName}</h5>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th className="th">Sl no.</th>
                          <th className="th">Item</th>
                          <th className="th">Quantity</th>
                          <th className="th">Price</th>
                        </tr>
                      </thead>

                      {val.items.map((valueitem, index) => (
                        <tbody>
                          <tr>
                            <td className="td">{index + 1}</td>
                            <td className="td">{valueitem.name}</td>
                            <td className="td">{valueitem.quantity}</td>
                            <td className="td">{valueitem.price}</td>
                          </tr>
                          <tr>
                            <th className="th">Total:</th>
                            <td colspan="3">
                              {valueitem.quantity * valueitem.price}
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </Table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AdminTotalOrder;
