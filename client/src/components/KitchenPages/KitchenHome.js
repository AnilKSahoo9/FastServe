import React, { useRef, useState, useEffect } from "react";
import { Table, Button, Form } from "react-bootstrap";
import axios from "axios";
import "./notification.css";
import Countdown from 'react-countdown';

// import io from "socket.io-client";
// let socket;

function KitchenDashbard() {
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [inputTime, setTime] = useState("0");
  const [display, setDisplay] = useState({
    orderStatusval: "pending",
    rowKey: null,
  });
  const [kitchendata, setKitchenData] = useState([]);

  // const ENDPOINT = "ws://localhost:4000/api/socket";
  // let connectionOptions = {
  //   "force new connection": true,
  //   reconnectionAttempts: "Infinity",
  //   timeout: 10000,
  //   transports: ["websocket"],
  // };

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:4000/getkitchendata/`);
    setKitchenData(response.data);
    //console.log(response.data);
  };

  useEffect(() => {
    // socket = io(ENDPOINT, connectionOptions);
    // console.log(socket);

    // socket.on("kitchenData", (kitchenData) => {
    //   //console.log(kitchenData);
    //   let kitchenData2 = {};
    //   kitchenData2 = kitchenData;
    //   kitchendata.push(kitchenData2);
    //   socket.emit("forkitchen", { name: "aarti" });
    // });

    // socket.on("kitchenData2", (kitchenData) => {
    //   let kitchenData2 = {};
    //   kitchenData2 = kitchenData;
    //   kitchendata.push(kitchenData2);
    // });

    fetchData();
  }, []);

  //to reduce the counterdown
  let interval = useRef();
  const startTimer = () => {
    const time = new Date();
    const countdowndate = new Date(time.getTime() + Number(inputTime) * 60000);

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
    }, 1000);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    console.log(event.target.value);
  };

  const changeTheTimer = () => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  };

  // const postData = () => {
  //   const payload = {
  //     orderStatus: "accept",
  //     _id: display.rowKey,
  //     time: inputTime + "min",
  //     orderType: "parcel",
  //   };
  //   axios
  //     .post(
  //       `http://localhost:4000/postkitchendata/`,
  //       // JSON.stringify(payload),
  //       payload,
  //       {
  //         header: {
  //           "Content-type":
  //             "application/json,application/x-www-form-urlencoded, charset=UTF-8",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       //console.log(response);
  //       if (response.status === 200) {
  //         console.log(response.data);
  //       }
  //     });
  // };

  //when order is accepted
  const acceptedOrder = (e) => {
    setDisplay({ orderStatusval: "accept", rowKey: e.target.value });
    // console.log(kitchendata.map((item, index) =>
    //   [...item]
    // ))
    //console.log(e.target.value);
    kitchendata.map((val, index) => {
      if (val._id == e.target.value) {
        val.orderStatus = "accept";
      }
    });
    // changeTheTimer();
    //postData();  //see above
  };

  //when order is canceled
  const orderDecline = (e) => {
    kitchendata.map((val, index) => {
      if (val._id == e.target.value) {
        val.orderStatus = "decline";
      }
    });
    setDisplay({ orderStatusval: "decline", rowKey: e.target.value });
  };
  console.log(kitchendata)
  return (
    <div className="container-fluid">
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
        {kitchendata.map((eachOrder, index) => (
          <tbody hover={true}>
            <tr
              key={index}
              style={
                eachOrder.orderStatus === "accept" && display.rowKey == eachOrder._id
                  ? { background: "#d9ffb3" }
                  : eachOrder.orderStatus === "decline" && display.rowKey == eachOrder._id
                    ? { background: "#ff9999" }
                    : { background: "#ffffe6" }
              }
            >
              <td>{index + 1}</td>
              {!eachOrder.tableNo ? <td>Parcel</td> : <td>Table:{eachOrder.tableNo}</td>}

              <td>{eachOrder._id}</td>
              <td>
                {eachOrder.orderStatus === "accept" && display.rowKey == eachOrder._id ? (
                  <div>
                    {" "}
                    <h5 className="blink">Order Processing......</h5>
                    <section className="timer">
                      <Countdown date={Date.now() + 600000} />

                      {/* <div>
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
                      </div> */}
                    </section>
                    <div className="acceptButton">
                      <Button variant="success">Completed</Button>
                    </div>
                  </div>
                ) : eachOrder.orderStatus === "decline" &&
                  display.rowKey === eachOrder._id ? (
                  <h3 className="blink">Order cancel</h3>
                ) : (
                  <>
                    <div>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Time Required</Form.Label>
                          <Form.Control as="select" onChange={handleTimeChange}>
                            <option value="300000">5 min</option>
                            <option value="600000">10 min</option>
                            <option value="900000">15 min</option>
                            <option value="20">20 min</option>
                            <option value="25">25 min</option>
                            <option value="30">30 min</option>
                            <option value="40"> 40 min</option>
                            <option value="60">60 min</option>
                          </Form.Control>
                        </Form.Group>
                      </Form>
                      <Button
                        variant="success"
                        onClick={acceptedOrder}
                        value={eachOrder._id}
                      >
                        accept
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={orderDecline}
                        value={eachOrder._id}
                      >
                        reject
                      </Button>
                    </div>
                  </>
                )}
              </td>
              <td>
                <ul>
                  {eachOrder.items.map((val) => (
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
