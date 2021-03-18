import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { data } from "../../StaticData/kitchenData";
import "./timer.css";
function KitchenDashbard() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [display, setDisplay] = useState({
    statusval: "notselected",
    rowKey: null,
  });
  const [id, setId] = useState("0");
  const [isActive, setIsActive] = useState(null);
  const acceptedOrder = (e) => {
    setDisplay({ statusval: "accepted", rowKey: e.target.value });
    setId(e.target.value);
    console.log(e.target.value);
  };
  console.log(display);
  const orderDecline = (e) => {
    setDisplay({ statusval: "decline", rowKey: e.target.value });
  };
  // const toggleActive = (i) => {
  //   //Remove the if statement if you don't want to unselect an already selected item
  //   if (i === isActive) {
  //     setIsActive({
  //       isActive: null,
  //     });
  //   } else {
  //     setIsActive({
  //       isActive: i,
  //     });
  //   }
  // };
  return (
    <div>
      <Table striped bordered hover keyField="orderId">
        <thead>
          <tr>
            <th>Order No</th>
            <th>Order Type</th>
            <th>Order Id</th>
            <th>Status</th>
            <th>Show Details</th>
          </tr>
        </thead>
        {data.map((no, index) => (
          <tbody>
            <tr
              key={index}
              style={
                display.statusval === "accepted" && display.rowKey == index
                  ? { background: "#98FB98" }
                  : { background: "#F0E68C" }
              }
            >
              <td>{index}</td>
              <td>{no.orderType}</td>
              <td>{no.orderId}</td>
              <td>
                {display.statusval === "accepted" && display.rowKey == index ? (
                  <div>
                    {" "}
                    Order Processing
                    <section className="timer">
                      <div>
                        <section>
                          <p>{timerHours}</p>
                          <p>
                            <small>hours</small>
                          </p>
                        </section>
                        <span>:</span>
                        <section>
                          <p>{timerMin}</p>
                          <p>
                            <small>min</small>
                          </p>
                        </section>
                        <span>:</span>
                        <section>
                          <p>{timerSec}</p>
                          <p>
                            <small>sec</small>
                          </p>
                        </section>
                      </div>
                    </section>
                    {""}
                    <Button variant="success">Completed</Button>
                  </div>
                ) : display.statusval === "decline" &&
                  display.rowKey == index ? (
                  <h3>Order cancel</h3>
                ) : (
                  <>
                    <div>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Time Required</Form.Label>
                          <Form.Control as="select">
                            <option>5 min</option>
                            <option>10 min</option>
                            <option>15 min</option>
                            <option>20 min</option>
                            <option>25 min</option>
                            <option>30 min</option>
                            <option>40 min</option>
                            <option>60 min</option>
                          </Form.Control>
                        </Form.Group>
                      </Form>
                      <Button
                        variant="success"
                        onClick={acceptedOrder}
                        value={index}
                      >
                        accept
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={orderDecline}
                        value={index}
                      >
                        reject
                      </Button>
                    </div>
                  </>
                )}
              </td>
              <td>
                <ul>
                  {no.orderDetails.map((val) => (
                    <li>{val.items + "  " + "=>" + "  " + val.quantity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default KitchenDashbard;
