import React, { useState ,useEffect} from "react";
import { Card, Table, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import axios from 'axios';
import io from 'socket.io-client';

let socket;

const AdminTotalOrder = () => {
  const [responseData,setResponseData] = useState([]);
  const [tableOrders,setTableOrders] = useState([]);
  const [parcelOrders,setParcelOrders] = useState([]);
  const ENDPOINT = 'ws://localhost:4000/api/socket';
  let connectionOptions = 
    {
      "force new connection" : true,
      "reconnectionAttempts": "Infinity", 
      "timeout" : 10000,                  
      "transports" : ["websocket"]
  };
  
  const fetchData = async() => {
    const response = await axios.get(`http://localhost:4000/admin-totalorders/`)
      setResponseData(response.data);
      setTableOrders(response.data.tableOrders);
      setParcelOrders(response.data.parcelOrders);
  }

useEffect(() => {
  socket = io(ENDPOINT,connectionOptions);
  console.log(socket);
 socket.on('parcelData',(parcelData) => {
  //console.log(parcelData);
  let parcelData2 = {};
  parcelData2 = parcelData;
  parcelOrders.push(parcelData2);
  socket.emit('my',{name:'sweta'})
});

socket.on('sessionData',(sessionData) => {
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
},[parcelOrders,tableOrders,ENDPOINT])

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
                              <h5>Session:{val.sessions.length}</h5>
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
          {/* {console.log(parcelOrders)} */}
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
                      <h5>ParcelNo:</h5>
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

                        {val.items.map((valueitem, index) => (
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
