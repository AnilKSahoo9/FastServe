import React, { useState, useEffect } from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import io from "socket.io-client";
// import "../AdminPages/AdminStyles.css";
import "../../css/AdminStyles.css";
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
      <Row className="admin_totalorder_row">
        <Col md={6} xs={12}>
           <span className="order_heading">Table Order Details</span> 
          {tableOrders.map((val, index) => (
            <Accordion className="accordion_total_order">
              <Card className="cards_total_order">
                <Card.Header className="headers_total_order">
                  <Accordion.Toggle
                    className="accordiontoggle_total_order"
                    as={Card.Header}
                    eventKey={String(index)}
                  >
                    <h5>Table: {val.tableNo}</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={String(index)}>
                  <Card.Body>
                    {val.sessions.map((value, index) => (
                      <Accordion className="accordion_total_order"  >
                        <Card className="cards_total_order">
                          <Card.Header className="headers_total_order">
                            <Accordion.Toggle className="accordiontoggle_total_order"
                              as={Card.Header}
                              eventKey={String(index)}
                            >
                              <h5>Session:{val.sessions.length}</h5>
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={String(index)}>
                            <Card.Body>
                              <h5>Order delivered by {value.waiterName}</h5>
                              <Table 
                              className="table_design_total_order"
                              striped bordered hover style={{ backgroundImage: `linear-gradient(to right,#0E3386,#0047AB, #002D62, #0a2351)`}}>
                                <thead>
                                  <tr>
                                    <th>
                                      Sl no.
                                    </th>
                                    <th>
                                      Item
                                    </th>
                                    <th>
                                      Quantity
                                    </th>
                                    <th>
                                      Price
                                    </th>
                                  </tr>
                                </thead>

                                {value.orderDetails.map((valueitem, index) => (
                                  <tbody>
                                    <tr>
                                      <td>
                                        {index + 1}
                                      </td>
                                      <td>
                                        {valueitem.name}
                                      </td>
                                      <td>
                                        {valueitem.quantity}
                                      </td>
                                      <td>
                                        {valueitem.price}
                                      </td>
                                    </tr>
                                    <tr>
                                  <th>
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
        <span className="order_heading">Parcel Order Details</span> 
          {/* {console.log(parcelOrders)} */}
          {parcelOrders.map((val,index) =>
              <Accordion className="accordion_total_order">
                <Card className="cards_total_order">
                  <Card.Header className="headers_total_order">
                    <Accordion.Toggle className="accordiontoggle_total_order"
                      as={Card.Header}
                      eventKey={String(index)}>
                      <h5>ParcelNo:</h5>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={String(index)}>
                    <Card.Body>
                      <h5>Order delivered by {val.billerName}</h5>
                      <Table 
                      className="table_design_total_order"
                      striped bordered hover>
                        <thead>
                          <tr>
                            <th>
                              Sl no.
                            </th>
                            <th>Item</th>
                            <th>
                              Quantity
                            </th>
                            <th>
                              Price
                            </th>
                          </tr>
                        </thead>

                        {val.items.map((valueitem, index) => (
                          <tbody>
                            <tr>
                              <td className="td_total_order">
                                {index + 1}
                              </td>
                              <td className="td_total_order">
                                {valueitem.name}
                              </td>
                              <td className="td_total_order">
                                {valueitem.quantity}
                              </td>
                              <td className="td_total_order">
                                {valueitem.price}
                              </td>
                            </tr>
                            <tr>
                                  <th className="th_total_order">
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
