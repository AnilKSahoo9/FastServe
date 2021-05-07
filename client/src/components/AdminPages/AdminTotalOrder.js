import React, { useState, useEffect } from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

import io from "socket.io-client";
// import "../AdminPages/AdminStyles.css";
import "../../css/AdminStyles.css";
let socket;

const AdminTotalOrder = () => {
  const [responseData, setResponseData] = useState([]);
  const [tableOrders, setTableOrders] = useState([]);
  const [parcelOrders, setParcelOrders] = useState([]);
  const [loading, setLoading] = useState(true)

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
    console.log(response.data)
    setResponseData(response.data);
    setTableOrders(response.data.tableOrders);
    setParcelOrders(response.data.parcelOrders);
    setLoading(false)
  };

  useEffect(() => {
    socket = io(ENDPOINT, connectionOptions);
    // console.log(socket);
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
      {
        loading ? (
          <div style={{ marginTop: "290px" }}>
            <ClipLoader
              color="#1f305e"
              loading={true}
              css={""}
              size={100}
            />
          </div>
        ) : (
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
                        <h5>Table No: {val.tableNo}</h5>
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
                                  <h5>Session No:{value.sessionNo}</h5>
                                </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey={String(index)}>
                                <Card.Body>
                                  <h5 style={{ "color": "black" }}>Ordered by Waiter:-<strong>{value.waiterName}+</strong></h5>
                                  <Table
                                    className="table_design_total_order"
                                    striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>
                                          Serial No.
                                    </th>
                                        <th>
                                          Item Name
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
                                      <tbody key={index}>
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
                                            Total Amount:
                                  </th>
                                          <td colspan="3">{valueitem.totalAmount}</td>
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
              {parcelOrders.map((val, index) =>
                <Accordion className="accordion_total_order">
                  <Card className="cards_total_order">
                    <Card.Header className="headers_total_order">
                      <Accordion.Toggle className="accordiontoggle_total_order"
                        as={Card.Header}
                        eventKey={String(index)}>
                        <h5>Parcel No: {val._id.slice(0, 8).toUpperCase()}</h5>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={String(index)}>
                      <Card.Body>
                        <h5 style={{ "color": "black" }}>Ordered by Biller:- <strong>{val.billerName}</strong></h5>
                        <Table
                          className="table_design_total_order"
                          style={{ "color": "black" }}
                          striped bordered hover>
                          <thead>
                            <tr>
                              <th>
                                Serial No.
                            </th>
                              <th>Item Name</th>
                              <th>
                                Quantity
                            </th>
                              <th>
                                Price
                            </th>
                            </tr>
                          </thead>

                          {val.items.map((valueitem, index) => (
                            <tbody key={index}>
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
                                <td colspan="3">{valueitem.totalAmount}</td>
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
        )}

    </div>
  );
};

export default AdminTotalOrder;
