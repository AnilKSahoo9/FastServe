import React, { useRef, useState, useEffect } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { data } from "../../StaticData/kitchenData";

import axios from "axios";
import "./notification.css";
function KitchenDashbard() {
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [display, setDisplay] = useState({
    orderStatusval: "notselected",
    rowKey: null,
  });
  const [kitchendata, setKitchenData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/getkitchendata/`)
      .then((response) => {
        //success call
        console.log(response.data);
        setKitchenData(response.data);
      })
      .catch((error) => {
        //for error happen
        console.log(error);
      });
  }, []);

  // console.log(data);
  // console.log(kitchendata.map((val) => val));
  //to reduce the counterdown
  let interval = useRef();
  const startTimer = () => {
    const time = new Date();
    const countdowndate = new Date(time.getTime() + 10 * 60000);

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdowndate - now;
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        setTimerHours(hours);

        setTimerMin(minutes);
        setTimerSec(seconds);
      }
      console.log(countdowndate);
    }, 1000);
  };
  const changeTheTimer = () => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  };

  //when order is aceepted

  const acceptedOrder = (e) => {
    setDisplay({ orderStatusval: "accepted", rowKey: e.target.value });

    kitchendata.map((val, index) => {
      if (index == e.target.value) {
        val.orderStatus = "accepted";
      }
    });
    changeTheTimer();
  };

  //when order is canceled

  const orderDecline = (e) => {
    kitchendata.map((val, index) => {
      if (index == e.target.value) {
        val.orderStatus = "decline";
      }
    });
    setDisplay({ orderStatusval: "decline", rowKey: e.target.value });
  };

  return (
    <div class="container-fluid">
      {/* {kitchendata.map((val) => val.items.map((no) => console.log(no)))} */}
      <Table striped bordered hover className="tableDisplay" variant="blue">
        <thead>
          <tr>
            <th>~:Order No:~</th>
            <th>~:Order Type:~</th>
            <th>~:Order Id:~</th>
            <th>~:Order Status:~</th>
            <th>~:Show Details:~</th>
          </tr>
        </thead>
        {kitchendata.map((no, index) => (
          <tbody hover={true}>
            <tr
              key={index}
              style={
                no.orderStatus === "accepted" && display.rowKey == index
                  ? { background: "#d9ffb3" }
                  : no.orderStatus === "decline" && display.rowKey == index
                  ? { background: "#ff9999" }
                  : { background: "#ffffe6" }
              }
            >
              <td>{index}</td>
              {!no.tableNo ? <td>Parcel</td> : <td>Table:{no.tableNo}</td>}

              <td>{no._id}</td>
              <td>
                {no.orderStatus === "accepted" && display.rowKey == index ? (
                  <div>
                    {" "}
                    <h5 className="blink">Order Processing......</h5>
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
                    <div className="acceptButton">
                      <Button variant="success">Completed</Button>
                    </div>
                  </div>
                ) : no.orderStatus === "decline" && display.rowKey == index ? (
                  <h3 className="blink">Order cancel</h3>
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
                  {no.items.map((val) => (
                    <li>{val.name + "  " + "=>" + "  " + val.quantity}</li>
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
